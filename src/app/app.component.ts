import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'lamina-paula';

  bgImage: string = '';

  cidade: FormControl = new FormControl();
  subTitulo: FormControl = new FormControl();
  data: FormControl = new FormControl();

  valor: FormControl = new FormControl();

  textBox: FormControl = new FormControl();

  headerFontSize: string = '';
  fontSizeSubTitulo: string = '';
  fontSizeData: string = '';

  position = 50;
  positionStory = 50;

  positionStoryY = 50;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    let value =
      '7 NOITES DE HOSPEDAGEM COM CAFÉ DA MANHÃ\nPREÇO POR PESSOA EM APARTAMENTO DUPLO\nTAXAS INCLUSAS\nSUJEIRO A ALTERAÇÃO DE PREÇO SEM AVISO PRÉVIO\nPASSAGEM AÉREA IDA E VOLTA\nVIAGEM NACIONAL\nTRANSLADO DO AEROPORTO P/HOTEL\nVISITA Á CIDADE E CUMBUCO';

    this.textBox.setValue(value);
  }

  setPosition(element: string, type: string) {
    type === 'mais'
      ? (this.positionStory = this.positionStory - 5)
      : (this.positionStory = this.positionStory + 5);

    let story: any = document.getElementById('story');

    story.style.backgroundPosition =
      this.positionStory + '% ' + ' ' + this.positionStoryY + '%';
  }

  setPositionY(element: string, type: string) {
    type === 'mais'
      ? (this.positionStoryY = this.positionStoryY - 5)
      : (this.positionStoryY = this.positionStoryY + 5);

    let story: any = document.getElementById('story');

    story.style.backgroundPosition =
      this.positionStory + '%' + ' ' + this.positionStoryY + '%';
  }

  abrirFiles() {
    document.getElementById('fileFeed')?.click();
  }

  onCidade() {
    console.log(this.cidade.value.length);

    if (this.cidade.value.length < 10) {
      this.headerFontSize = '70px';
    }

    if (this.cidade.value.length > 10) {
      this.headerFontSize = '61px';
    }

    if (this.cidade.value.length >= 15) {
      this.headerFontSize = '50px';
    }

    if (this.cidade.value.length >= 20) {
      this.headerFontSize = '42px';
    }

    if (this.cidade.value.length >= 25) {
      this.headerFontSize = '34px';
    }
  }

  onSubTitulo() {
    if (this.subTitulo.value.length > 20) {
      this.fontSizeSubTitulo = '26px';
    } else {
      this.fontSizeSubTitulo = '42px';
    }
  }

  onData() {
    let value = this.data.value.length;
    console.log(value);

    if (value < 16) {
      this.fontSizeData = '64px';
    }

    if (value > 16) {
      this.fontSizeData = '51px';
    }

    if (value > 20) {
      this.fontSizeData = '42px';
    }

    if (value > 24) {
      this.fontSizeData = '32px';
    }

    if (value > 30) {
      this.fontSizeData = '24px';
    }
  }

  setarBackground(event: any) {
    this.bgImage = URL.createObjectURL(event.files[0]);

    console.log(this.bgImage);
  }

  @ViewChild('canvas') canvas: any;
  @ViewChild('downloadLink') downloadLink: any;
  @ViewChild('screen') screen: any;

  imprimirStories() {
    html2canvas(this.screen.nativeElement).then((canvas) => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'marble-diagram.png';
      this.downloadLink.nativeElement.click();
    });
  }
}
