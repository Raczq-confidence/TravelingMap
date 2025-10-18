interface RenderEventDetail {
  message: string;
}

type RenderEvent = CustomEvent<RenderEventDetail>;

export class RenderEventManager {
  private static readonly EVENT_NAME = "renderEvent";
  private static instance: RenderEventManager;

  private constructor() {}

  public static getInstance(): RenderEventManager {
    if (!RenderEventManager.instance) {
      RenderEventManager.instance = new RenderEventManager();
    }
    return RenderEventManager.instance;
  }

  private isRenderEvent(event: Event): event is RenderEvent {
    return event.type === RenderEventManager.EVENT_NAME;
  }

  public dispatch(message: string = "React App rendered"): void {
    const renderEvent: RenderEvent = new CustomEvent(
      RenderEventManager.EVENT_NAME,
      {
        detail: { message },
        bubbles: true,
        cancelable: true,
      }
    );

    window.dispatchEvent(renderEvent);
  }

  public addListener(callback: (_detail: RenderEventDetail) => void): void {
    window.addEventListener(RenderEventManager.EVENT_NAME, (event) => {
      if (this.isRenderEvent(event)) {
        callback(event.detail);
      }
    });
  }

  public removeListener(callback: EventListener): void {
    window.removeEventListener(RenderEventManager.EVENT_NAME, callback);
  }

  public getEventName(): string {
    return RenderEventManager.EVENT_NAME;
  }
}

const renderEventManager = RenderEventManager.getInstance();

export default renderEventManager;
