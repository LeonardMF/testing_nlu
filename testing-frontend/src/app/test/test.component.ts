import { Component, OnInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import { SpeakService, ListenService } from 'speech-angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {

  wakeword: string;
  prompt = 'Wie wird das Wetter Morgen?';

  listenResult: string;

  listenButtonOn: boolean;
  speakButtonOn: boolean;
  errorFlag: boolean;
  errorText: string;
  messages = [];

  speakStartEvent: any;
  speakStopEvent: any;
  speakErrorEvent: any;

  listenStartEvent: any;
  listenStopEvent: any;
  listenResultEvent: any;
  listenErrorEvent: any;

  constructor(
    private ref: ChangeDetectorRef,
    private speakService: SpeakService,
    private listenService: ListenService
  ) { }

  ngOnInit() {

    this.speakStopEvent = this.speakService.stopEvent.subscribe( () => {
      // const message = 'Speak: stop';
      this.speakButtonOn = false;
      // this.messages.push(message);
      this.startListen();
      this.ref.detectChanges();
    });

    this.speakErrorEvent = this.speakService.errorEvent.subscribe( (error) => {
      this.errorFlag = true;
      this.errorText = 'Error on Speak: ' + error.message ;
      this.ref.detectChanges();
    });

    this.listenResultEvent = this.listenService.resultEvent.subscribe(aText => {
      const message = 'Result: ' + aText;
      this.listenResult = aText;
      this.messages.push(message)
      this.ref.detectChanges();
    });

    this.listenErrorEvent = this.listenService.errorEvent.subscribe( (error) => {
      this.errorFlag = true;
      this.errorText = 'Error on Listen: ' + error.message ;
      this.ref.detectChanges();
    });

  }

  ngOnDestroy(): void {
    this.speakErrorEvent.unsubscribe();

    this.listenResultEvent.unsubscribe();
    this.listenErrorEvent.unsubscribe();
  }

  setWakeword(): void {
    console.log(this.wakeword + '. ' + this.prompt);
    this.listenResult = '';
  }

  setPrompt(): void {
    console.log(this.wakeword + '. ' + this.prompt);
    this.listenResult = '';
  }

  startSpeak(): void {
    const testprompt = this.wakeword + '. ' + this.prompt;
    this.listenResult = '';
    this.speakService.text = testprompt;
    this.speakService.start();
    const message = 'Prompt: ' + this.prompt;
    this.messages.push(message);
    this.ref.detectChanges();
  }

  startListen(): void {
    this.listenService.start();
  }

}
