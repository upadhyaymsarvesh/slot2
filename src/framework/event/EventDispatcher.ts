interface IEventDispatcher{
    // maintain a list of listeners
    addEventListener(theEvent:string, theHandler:any);
  
    // remove a listener
    removeEventListener(theEvent:string, theHandler:any);
  
    // remove all listeners
    removeAllListeners(theEvent:string);
  
    // dispatch event to all listeners
    dispatchAll(theEvent:string);
  
    // send event to a handler
    dispatchEvent(theEvent:string, theHandler?:any);
  }
  
  export class EventDispatcher implements IEventDispatcher {
    private _eventHandlers = {};
  
    // maintain a list of listeners
    public addEventListener(theEvent:string, theHandler:any) {
      this._eventHandlers[theEvent] = this._eventHandlers[theEvent] || [];
      this._eventHandlers[theEvent].push(theHandler);
    }
  
    // remove a listener
    removeEventListener(theEvent:string, theHandler:any) {
      // TODO
    }
  
    // remove all listeners
    removeAllListeners(theEvent:string) {
      // TODO
    }
  
    // dispatch event to all listeners
    dispatchAll(theEvent:string) {
      var theHandlers = this._eventHandlers[theEvent];
      if(theHandlers) {
        for(var i = 0; i < theHandlers.length; i += 1) {
        //   dispatchEvent(theEvent);
        }
      }
    }
  
    // send event to a handler
    dispatchEvent(theEvent:string, theHandler?:any) {
      theHandler(theEvent);
    }
  }