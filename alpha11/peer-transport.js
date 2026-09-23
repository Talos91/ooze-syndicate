/* PeerJS transport only. Godot's host simulation owns all game rules. */
(function () {
  let peer = null, host = false, events = [], links = new Map(), epoch = 0;
  const prefix = 'ooze11-';
  function emit(event) { if (events.length < 256) events.push(event); }
  function bind(conn, token) {
    if (links.size >= 4 || links.has(conn.peer)) { conn.close(); return; }
    links.set(conn.peer, conn);
    conn.on('open', () => { if (token === epoch) emit({type:'connection', peer:conn.peer}); });
    conn.on('data', data => { if (token !== epoch) return; if (typeof data !== 'string' || data.length > (host ? 4096 : 8*1024*1024)) { conn.close(); return; } emit({type:'data', peer:conn.peer, data}); });
    conn.on('close', () => { if (token !== epoch) return; links.delete(conn.peer); emit({type:'closed',peer:conn.peer}); });
    conn.on('error', () => { if (token === epoch) emit({type:'closed',peer:conn.peer}); });
  }
  window.OozePeer = {
    start(isHost, code) {
      this.close(); host=!!isHost; const token=epoch;
      if (typeof Peer !== 'function') { emit({type:'error',message:'PeerJS did not load. Refresh the page.'}); return; }
      if (!host && !/^[A-Z2-9]{8}$/.test(code)) { emit({type:'error',message:'Enter the eight-character room code.'}); return; }
      let id;
      if (host) { const bytes=crypto.getRandomValues(new Uint8Array(8));const alphabet='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';id=prefix+Array.from(bytes,b=>alphabet[b%alphabet.length]).join(''); }
      peer=host?new Peer(id,{debug:0}):new Peer({debug:0});
      peer.on('open', id => { if(token!==epoch)return;emit({type:'open',code:host?id.slice(prefix.length):code});if(!host)bind(peer.connect(prefix+code,{reliable:true,serialization:'raw'}),token); });
      peer.on('connection', conn => { if(token!==epoch || !host){conn.close();return;}bind(conn,token); });
      peer.on('error', err => { if(token===epoch)emit({type:'error',message:err.type==='peer-unavailable'?'Room not found. Check the code and keep the host online.':'Connection failed ('+err.type+'). Try another network or recreate the room.'}); });
      peer.on('disconnected', () => { if(token===epoch)emit({type:'signalling-lost'}); });
    },
    send(id, data) { const conn=links.get(id); if(!conn || !conn.open || conn.bufferSize>16)return false;conn.send(data);return true; },
    closePeer(id) { const conn=links.get(id);if(conn)conn.close(); },
    poll() { const result=JSON.stringify(events);events=[];return result; },
    close() { epoch++; for(const conn of links.values())conn.close();links.clear();if(peer)peer.destroy();peer=null;events=[]; }
  };
})();
