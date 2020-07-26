import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NowPlayingPage } from './now-playing.page';

describe('NowPlayingPage', () => {
  let component: NowPlayingPage;
  let fixture: ComponentFixture<NowPlayingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowPlayingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NowPlayingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
