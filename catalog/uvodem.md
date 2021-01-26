```html|plain,no-source,no-frame,span-2
<div id="bg2">
</div>
<div class="bgfix">
    <img src="./assets/NTXL_obdelnik.svg" width="184px">
</div>
```
---

```html|plain,no-source,no-frame,span-2
<style>
    * {
        border: 0px !important;
    }
    #bg {
        width: 100.10vw;
        height: 115%;
        background: #C1C9BB;
        left: -1.283rem;
        top: -3rem;
        position: absolute !important;
        z-index:0;
    }
    #bg2 {
        width: 100.10vw;
        height: 125%;
        background: #C1C9BB;
        left: -1.283rem;
        top: -3rem;
        position: absolute !important;
        z-index:-1000;
    }
    @media screen and (min-width: 1000px) {
        #bg,#bg2 {
            left: -18.27rem;
        }
    }
    @media screen and (max-width: 639px) {
        #bg, #bg2 {
            height: calc(150% * 2.15);
        }
    }
    @media screen and (max-width: 500px) {
        #bg, #bg2 {
            height: calc(170% * 1.92);
        }
    }
    @media screen and (max-width: 370px) {
        #bg, #bg2 {
            height: calc(170% * 1.95);
        }
    }
    .bgfix {
        background-color: #C1C9BB !important;
    }
    h1 {
        font-family:"pangramregular";
        font-size:24px;
    }
    p {
        text-align: left;
        font-family:"pangramregular";
        margin-bottom:-20px;
        padding-right: 40px;
    }
    .button1 {
        display:inline-block;
        position: relative;
        background-color:#5857FF;
        border-radius:5px;
        cursor:pointer;
        color:#ffffff;
        font-family:"pangramregular";
        font-size:12px;
        font-weight: 700;
        padding-top:17px;
        padding-bottom:17px;
        text-decoration:none;
        margin-right:13px;
    }
    .button2 {
        display:inline-block;
        position: relative;
        background-color:#5857FF;
        border-radius:5px;
        cursor:pointer;
        color:#ffffff;
        font-family:"pangramregular";
        font-size:12px;
        font-weight:700;
        padding-top:17px;
        padding-bottom:17px;
        text-decoration:none;
        margin-right:10px;
    }
    .button3 {
        display:inline-block;
        position: relative;
        background-color:#5857FF;
        border-radius:5px;
        cursor:pointer;
        color:#ffffff;
        font-family:"pangramregular";
        font-size:12px;
        font-weight:700;
        padding-top:23px;
        padding-left:23px;
        padding-right:23px;
        padding-bottom:18px;
        text-decoration:none;
        margin-right:13px;
    }
    .button4 {
        display:inline-block;
        background-color:#CEC5C0;
        border-radius:5px;
        cursor:pointer;
        color:#373A35;
        font-family:"pangramregular";
        font-size:12px;
        font-weight: 700;
        padding-top:23px;
        padding-left:23px;
        padding-right:23px;
        padding-bottom:18px;
        position: relative;
        text-decoration:none;
        margin-right:13px;
    }
    .button5 {
        display:inline-block;
        position: relative;
        background-color:#CEC5C0;
        border-radius:5px;
        cursor:pointer;
        color:#373A35;
        font-family:"pangramregular";
        font-size:12px;
        font-weight:700;
        padding-top:17px;
        padding-bottom:17px;
        text-decoration:none;
        margin-right:10px;
    }
    .button:hover {
        background-color:#0688fa;
        text-decoration:none;
    }
    .fonttext {
        position:relative;
        top:-19px;
        left:14px;
        text-decoration:none;
    }
    .fonttext2 {
        position:relative;
        top:-19px;
        left: -5px;
        text-decoration:none;
        padding:0 27px;
    }
    .fontdisp {
        position:relative;
        top:-18px;
        left: 20px;
        text-decoration:none;
    }
    #arrow {
        position: relative;
        top: 5px;
        left: -2px;
        margin: 0px 4.86px;
    }
    .first {
        display:inline-block;
        float:left;
    }
    .first {
        position: relative;
        margin-bottom: 0px;
    }
    .textbox {
        height:140px;
    }
    .intropic {
        border-radius: 4px;
    }

</style>

<div id="bg">
</div>

<div class="first">
    <img class="intropic" src="./assets/2-dok-logo-pozitiv.jpg" width="100%">
    <div class="textbox">
        <h1>Základní</h1>
        <p>
            Balíčky obsahují horizontální a vertikální variantu loga
        </p>
    </div>
    <a class="button1" href="download/logotyp/zakladni-logotyp-pro-tisk.zip" download>
        <p class="fonttext">
            <img id="arrow" src="./assets/arrow.png" width="16" height="18">
            Pro tisk
        </p>
    </a>
    <a class="button2" href="#" download>
        <p class="fonttext">
            <img id="arrow" src="./assets/arrow.png" width="16" height="18">
            Pro digital
        </p>
    </a>
</div>
```

```html|plain,no-source,no-frame,span-2
<div class="bgfix">
    <img class="intropic" src="./assets/3-dok-logo-negativ.jpg" width="100%">
    <div class="textbox">
        <h1>Černobílý negativní</h1>
        <p>
            Paleta povolených barev pro tisk i digital
        </p>
    </div>
    <a class="button3" href="#" download=>
        <p class="fontdisp">
            Zobrazit
        </p>
    </a>
</div>
```

```html|plain,no-source,no-frame,span-2
<div class="bgfix">
    <img class="intropic" src="./assets/3-dok-logo-negativ.jpg" width="100%">
    <div class="textbox">
        <h1>Černobílý negativní</h1>
        <p>
            Paleta povolených barev pro tisk i digital        
        </p>
    </div>
    <a class="button3" href="#" download=>
        <p class="fontdisp">
            Zobrazit
        </p>
    </a>
</div>
```

```html|plain,no-source,no-frame,span-2
<div>
    <div class="textbox">
        <h1>Názvy a tón značky</h1>
        <p>
            Jak píšeme správně název značky. Jaký je tón značky.      
        </p>
    </div>
    <a class="button4" href="#" download=>
        <p class="fontdisp">
            Zobrazit
        </p>
    </a>
</div>
```

```html|plain,no-source,no-frame,span-2
<div>
    <div class="textbox">
        <h1>Fotografie značky</h1>
        <p>
            Kompletní balíček fotografií lišejníků.      
        </p>
    </div>
    <a class="button5" href="#" download>
        <p class="fonttext2">
            <img id="arrow" src="./assets/arrow.png" width="16" height="18">
            Stáhnout
        </p>
    </a>
</div>
```

```html|plain,no-source,no-frame,span-2
<div>
    <div class="textbox">
        <h1>Instagram a Facebook</h1>
        <p>
            Jak vypadá základní post s textem, s fotkou nebo produktem.      
        </p>
    </div>
    <a class="button4" href="#" download=>
        <p class="fontdisp">
            Zobrazit
        </p>
    </a>
</div>
```

```html|plain,no-source,no-frame,span-2
<div>
    <div class="textbox">
        <h1>Ikony</h1>
        <p>
            Základní set ikon používaných napříč značkou.
        </p>
    </div>
    <a class="button5" href="#" download>
        <p class="fonttext2">
            <img id="arrow" src="./assets/arrow.png" width="16" height="18">
            Stáhnout
        </p>
    </a>
</div>
```

```type
```

Redesign vytvořilo [Jakub Vaněk Studio](https://jakub-vanek.cz/).