<?php
    session_start();
    if(!isset($_SESSION["username"])){
        header("Location: login.php");
        exit;
    }
?>
<html>
    <head>
        <title>copia kitkat</title>
        <link rel="stylesheet" href="index.css" />
        <script src="index.js" defer ></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Mogra&family=Rubik+Puddles&display=swap" rel="stylesheet">
    </head>
    <body>
    <header>
            <nav>
                <div id="link">
                        <div class="link"><img src="https://www.kitkat.it/sites/default/files/06_KITKAT_Master_Identity_RGB.png"></div>
                        <div class="link1">
                                <strong>PRODOTTI</strong>
                                <div class="primo_nascosto">
                                <div><a href="https://www.kitkat.it/tutti-i-prodotti">Tutti i Prodotti</a></div>
                                <div><a href="https://www.kitkat.it/classic-break">Classic Breack</a></div>
                                <div><a href="https://www.kitkat.it/mini-break">Mini Breack</a></div>
                                <div><a href="https://www.kitkat.it/extra-break">Extra Breack</a></div>
                                <div><a href="https://www.kitkat.it/easter-break">Easter Breack</a></div>
                                </div> 
                        </div>
                        <div class="link2">
                            <strong>OCCASIONI</strong>
                            <div class="secondo_nascosto">
                                <div><a href="https://www.kitkat.it/birthday">Occasioni</a></div>
                                <div><a href="https://www.kitkat.it/everyday">Everyday</a></div>
                                <div><a href="https://www.kitkat.it/birthday">Birthday</a></div>
                                <div><a href="https://www.kitkat.it/node/616">Easter</a></div>
                            </div>
                        </div>
                        <div class="link3">
                            <strong>SCOPRI KITKAT</strong>
                            <div class="terzo_nascosto">
                                <div><a href="https://www.kitkat.it/la-storia-di-kitkat">La storia di KITKAT</a></div>
                                <div><a href="https://www.kitkat.it/ultime-news/il-nestle-cocoa-plan">The Neslè Cocoa plan</a></div>
                            </div>
                        </div>
                        <div class="link4">
                            <strong>BREAKS FOR GOOD</strong>
                            <div class="quarto_nascosto">
                                <div><a href="https://www.kitkat.it/breaks-for-good/planting-more-trees-cocoa">More Tree</a></div>
                                <div><a href="https://www.kitkat.it/breaks-for-good/helping-children-schools-cocoa">Helping Kids Schools</a></div>
                                <div><a href="https://www.kitkat.it/breaks-for-good/helping-children-schools-cocoa">More Money For Cocoa Farming Families</a></div>
                                <div><a href="https://www.kitkat.it/breaks-for-good/sustainable-cocoa">Sustainably Sourced Cocoa</a></div>
                            </div>
                        </div>
                        <div class="link5">
                            <strong>PROMOZIONI</strong>
                            <div class="quinto_nascosto">
                                <div><a href="https://www.promozionitaliane.it/play-break-win/?_ga=2.181297957.380491038.1706624373-1398186858.1703671393">Concorso League of Legend KitKat</a></div>
                                <div><a href="https://www.kitkat.it/playthebreak-kitkat-playstation-pasqua">Concorso Playstation Pasqua 2024</a></div>
                            </div>
                        </div>
                        <div class="link"><a href="https://www.kitkat.it/cereals"><strong>CEREALS</strong></a></div>
                        <div class="link"><a href="https://www.kitkat.it/ricette"><strong>RICETTE</strong></a></div>
                        <div class="link8">
                            <strong>CONTATTACI</strong>
                            <div class="ottavo_nascosto">
                                <div><a href="https://www.kitkat.it/contattaci">Contattaci</a></div>
                                <div><a href="https://www.kitkat.it/faq">FAQ</a></div>
                                <div><a href="https://www.kitkat.it/signup">Iscriviti adesso</a></div>
                            </div>
                        </div>
                        <div class="link"><a href="profilo.php"><strong>PROFILO</strong></a></div>        
                </div>
            </nav>
            <div id="menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="nascosto">
                <div class="link"><img src="https://www.kitkat.it/sites/default/files/06_KITKAT_Master_Identity_RGB.png"></div>
            </div>
    </header>
    <main>
        <div class="menu">
            <div id="listesup">
                <div><h2><a href="profilo.php">PROFILO</a></h2></div>
                <div>
                    <div class="pulsante1"><img src="freccia.png"></div>
                    <h2><strong>PRODOTTI</strong></h2>
                    <div class="lista_prodotti">
                         <span>
                            <a href="https://www.kitkat.it/tutti-i-prodotti">Tutti i prodotti</a> </br>
                            </br><a href="https://www.kitkat.it/classic-break">Classic Break</a> </br>
                            </br><a href="https://www.kitkat.it/mini-break">Mini Break</a> </br>
                            </br><a href="https://www.kitkat.it/extra-break">Extra Break</a> </br>
                            </br><a href="https://www.kitkat.it/easter-break">Festive Break</a> 
                        </span>
                    </div>
                </div>
                <div>
                    <div class="pulsante2"><img src="freccia.png"></div>
                    <h2><strong>OCCASIONI</strong></h2>
                    <div class="lista_occasioni">
                        <span>
                            <a href="https://www.kitkat.it/everyday">Everyday</a></br>
                            </br><a href="https://www.kitkat.it/birthday">Birthday</a></br>
                            </br><a href="https://www.kitkat.it/node/616">Easter</a> 
                        </span>
                    </div>    
                    
                </div>
                <div>
                    <div class="pulsante3"><img src="freccia.png"></div>
                    <h2><strong>SCOPRI KITKAT</strong></h2>
                    <div class="lista_scopriKitKat">
                        <span>
                            <a href="https://www.kitkat.it/la-storia-di-kitkat">La Storia di KITKAT</a> </br>
                            </br><a href="https://www.kitkat.it/ultime-news/il-nestle-cocoa-plan">Nestle’ Cocoa Plan</a> </br>
                            </br><a href="https://www.kitkat.it/breaks-for-good">BREAKS FOR GOOD</a> 
                        </span>
                    </div>       
                </div>
                <div>
                    <div class="pulsante4"><img src="freccia.png"></div>
                    <h2><strong>PROMOZIONI</strong></h2>
                    <div class="lista_promozioni">
                            <a href="https://www.promozionitaliane.it/play-break-win/?_ga=2.181297957.380491038.1706624373-1398186858.1703671393">CONCORSI</a> </br>
                            </br><a href="https://www.promozionitaliane.it/play-break-win/?_ga=2.181297957.380491038.1706624373-1398186858.1703671393">Concorso League of</br> Legend KitKat</br></a>  
                            </br><a href="https://www.promozionitaliane.it/play-break-win/?_ga=2.181297957.380491038.1706624373-1398186858.1703671393">Concorso PlayStation</br> Pasqua 2024</a> 
                    </div>      
                </div>
                <div>
                    <div class="pulsante5"><img src="freccia.png"></div>
                    <h2><strong>RICETTE</strong></h2>
                    <div class="lista_ricette">
                        <span>
                            <span><a href="https://www.kitkat.it/ricette">Ricette</a></span> 
                        </span>
                    </div>        
                </div>
                <div>
                    <div class="pulsante6"><img src="freccia.png"></div>
                    <h2><strong>SUPPORTO</strong></h2>
                    <div class="lista_supporto">
                         <span>
                            <a href="https://www.kitkat.it/contattaci">Contattaci</a> </br>
                            </br><a href="https://www.kitkat.it/faq">FAQ</a>
                        </span>
                    </div>       
                </div>
                <div class="nascosto">
                    <div class="pulsante7"><img src="freccia.png"></div>
                    <h2><strong>CONFORMITA' LEGALE</strong></h2>
                    <div class="lista_legale">
                        <span>
                            <a href="https://www.nestle.it/info/notelegali_privacy">Politiche di Privacy</a> </br>
                            </br><a href="https://www.buonalavita.it/note-legali">Cookie</a>
                            </br><a href="https://www.kitkat.it/sitemap">Mappa del sito</a>
                        </span>
                    </div>                    
                </div>
            </div>
        </div>
      <div id="pagina-scorrevole">
        <div class="pagina-scorrevole">
            <h1><strong>VINCI CON KITKAT</strong> </h1>
            <p>ACQUISTA 3€ DI PRODOTTO E PROVA A VINCERE OGNI SETTIMANA FANTASTICI PREMI</p>
            <a href="https://www.promozionitaliane.it/play-break-win/?_ga=2.110135558.2063597705.1707293578-1398186858.1703671393"><div><strong>SCOPRI DI PIU'</strong></div></a>
        </div>
        <div id="img-pagina-scorrevole" data-posizione="normale"><img src="https://www.kitkat.it/sites/default/files/2024-02/Statici%20campagna%20kitkat%20LoL1-1.jpg"></div>
        <button class="avanti">avanti</button>
        <button class="indietro">indietro</button>
    </div>
      <div id="gamme-prodotti">
        <h1>LE NOSTRE GAMME</h1>
        <div class="gamme-prodotti">
            <div>
                <a href="https://www.kitkat.it/classic-break"><img src="https://www.kitkat.it/sites/default/files/2024-01/KK%20CLASSICO%20IAP%20PACK%20-%20MAIN.png"></a></br>
                <a href="https://www.kitkat.it/classic-break"><strong>Classic Breack</strong></a>
            </div>
            <div class="img-piccole">
                <a href="https://www.kitkat.it/mini-break"><img src="https://www.kitkat.it/sites/default/files/2022-08/KK%20MINI%20X9_0.png"></a></br>
                <a href="https://www.kitkat.it/mini-break"><strong>Mini Breack</strong></a>
            </div>
            <div class="img-piccole">
                <a href="https://www.kitkat.it/extra-break"><img src="https://www.kitkat.it/sites/default/files/2022-08/KK%20Chunky%20CLASSICO_0.png"></a></br>
                <a href="https://www.kitkat.it/extra-break"><strong>EXTRA BREACK</strong></a>
            </div>
            <div class="img-piccole">
                <a href="https://www.kitkat.it/easter-break"><img src="https://www.kitkat.it/sites/default/files/2024-01/UOVO-KK-classico_1680x1680px_0.png"></a></br>
                <a href="https://www.kitkat.it/easter-break"><strong>FESTIVE BREACK</Fieldset></strong></a>
            </div>
        </div>
      </div>
      <div id="api">
        <h1>FAI APERITIVO CON KITKAT</h1>
        <span>Utilizza anche tu le funzioni del nostro sito per accompagnare i tuoi aperitivi.Potrai ottenere cocktail tramite un ingrediente e una playlist da spotify tramite un genere musicale</span>
        <form>
            <span>INSERISCI UN INGREDIENTE</span>
            <input type="text"  name='content' id="scelta">
            <select name = 'tipo' id='tipo'>
				<option value='cocktail'>cocktail</option>
				<option value='musica'>musica</option>
			</select>
            <input type="submit" value="cerca">
        </form>
        <div id="preferitiAPI"><a href="preferiti.php">PREFERITI</a></div>
        <section id="raccoglitore">

        </section>
      </div>
      <div id="gelato">
        <div class="gelato"><img src="https://www.kitkat.it/sites/default/files/styles/960px_width/public/2022-08/MicrosoftTeams-image%20%2856%29.png?itok=RxuvrnDJ"></div>
        <div class="gelato1"><span>SCOPRI TUTTI I MODI IN CUI PUOI FARE BREAK CON KITKAT</br>
            Lasciati ispirare dalle nostre ricette!</br></br></br>
            <a href="https://www.kitkat.it/ricette"><strong>SCOPRI DI PIU'</strong></a></span></div>
        </div>
        <div id="newsletter">
            <div class="newsletter">
                <div id="striscia-bianca"></div>
                <div><h3><strong>NON PERDERTI NESSUN BREACK</strong></h3>
                    <span>Iscriviti subito alla nostra newsletter per non perderti</br>
                        nessuna news del mondo KITKAT e per scoprire in</br>
                      anteprima tutti i nuovi lanci.
                    </span>
                </div>
                <a href="">
                    <div id="iscrizione">
                        <span>ISCRIVITI</span>
                    </div>
                </a>
                
            </div>
            <div id="img"><img src="logo_newsletter.png"></div>
        </div>
        <div id="connetti">
            <div id="sposta_connetti">
                <h1>CONNETTITI   CON   NOI</h1>
                <div class="connetti">
                    <div><a href="https://www.instagram.com/kitkat_italy/"><img src="instagram.png"></a></div>
                    <div><a href="https://www.youtube.com/user/KitKatItalia"><img src="youtube.png"></a></div>
                    <div><a href="https://www.facebook.com/kitkatit/"><img src="facebook.png"></a></div>
                </div>
            </div>
            <div id="img_connetti"><img src="img_connetti.png"></div>
        </div>
        <div id="gioco" data-colore="kitkat">
            <h1>GIOCA CON NOI</h1>
            <div>PREMI IL BOTTONE E TROVA 3 KITKAT PER VINCERE</div>
            <div class="gioco"></div>
            <div class="risultato"></div>
            <button class="giochiamo">giochiamo</button>
        </div>
        <div id="liste">
            <div>
                <div class="pulsante1"><img src="freccia.png"></div>
                <h2><strong>PRODOTTI</strong></h2>
                <div class="lista_prodotti">
                     <span>
                        <a href="https://www.kitkat.it/tutti-i-prodotti">Tutti i prodotti</a> </br>
                        </br><a href="https://www.kitkat.it/classic-break">Classic Break</a> </br>
                        </br><a href="https://www.kitkat.it/mini-break">Mini Break</a> </br>
                        </br><a href="https://www.kitkat.it/extra-break">Extra Break</a> </br>
                        </br><a href="https://www.kitkat.it/easter-break">Festive Break</a> 
                    </span>
                </div>
            </div>
            <div>
                <div class="pulsante2"><img src="freccia.png"></div>
                <h2><strong>OCCASIONI</strong></h2>
                <div class="lista_occasioni">
                    <span>
                        <a href="https://www.kitkat.it/everyday">Everyday</a></br>
                        </br><a href="https://www.kitkat.it/birthday">Birthday</a></br>
                        </br><a href="https://www.kitkat.it/node/616">Easter</a> 
                    </span>
                </div>    
                
            </div>
            <div>
                <div class="pulsante3"><img src="freccia.png"></div>
                <h2><strong>SCOPRI KITKAT</strong></h2>
                <div class="lista_scopriKitKat">
                    <span>
                        <a href="https://www.kitkat.it/la-storia-di-kitkat">La Storia di KITKAT</a> </br>
                        </br><a href="https://www.kitkat.it/ultime-news/il-nestle-cocoa-plan">Nestle’ Cocoa Plan</a> </br>
                        </br><a href="https://www.kitkat.it/breaks-for-good">BREAKS FOR GOOD</a> 
                    </span>
                </div>       
            </div>
            <div>
                <div class="pulsante4"><img src="freccia.png"></div>
                <h2><strong>PROMOZIONI</strong></h2>
                <div class="lista_promozioni">
                        <a href="https://www.promozionitaliane.it/play-break-win/?_ga=2.181297957.380491038.1706624373-1398186858.1703671393">CONCORSI</a> </br>
                        </br><a href="https://www.promozionitaliane.it/play-break-win/?_ga=2.181297957.380491038.1706624373-1398186858.1703671393">Concorso League of</br> Legend KitKat</br></a>  
                        </br><a href="https://www.promozionitaliane.it/play-break-win/?_ga=2.181297957.380491038.1706624373-1398186858.1703671393">Concorso PlayStation</br> Pasqua 2024</a> 
                </div>      
            </div>
            <div>
                <div class="pulsante5"><img src="freccia.png"></div>
                <h2><strong>RICETTE</strong></h2>
                <div class="lista_ricette">
                    <span>
                        <span><a href="https://www.kitkat.it/ricette">Ricette</a></span> 
                    </span>
                </div>        
            </div>
            <div>
                <div class="pulsante6"><img src="freccia.png"></div>
                <h2><strong>SUPPORTO</strong></h2>
                <div class="lista_supporto">
                     <span>
                        <a href="https://www.kitkat.it/contattaci">Contattaci</a> </br>
                        </br><a href="https://www.kitkat.it/faq">FAQ</a>
                    </span>
                </div>       
            </div>
            <div class="nascosto">
                <div class="pulsante7"><img src="freccia.png"></div>
                <h2><strong>CONFORMITA' LEGALE</strong></h2>
                <div class="lista_legale">
                    <span>
                        <a href="https://www.nestle.it/info/notelegali_privacy">Politiche di Privacy</a> </br>
                        </br><a href="https://www.buonalavita.it/note-legali">Cookie</a>
                        </br><a href="https://www.kitkat.it/sitemap">Mappa del sito</a>
                    </span>
                </div>                    
            </div>
        </div>
    </main>
    <footer>
        <div><a href="https://www.nestle.it/"><img src="https://www.kitkat.it/sites/default/files/2021-12/nestle%20%281%29.png"></a></div>
        <div><a href="https://www.nestle.it/"><span><strong>© 2023 Nestlé Limited, all rights reserved</strong></span></a></div>
        <div id="sparisci">
            <a href="https://www.nestle.it/info/notelegali_privacy"><span><strong>Politiche di Privacy</strong></span></a>
            <a href="https://www.buonalavita.it/note-legali"><span><strong>Cookie</strong></span></a>
            <a href="https://www.kitkat.it/sitemap"><span><strong>Mappe del sito</strong> </span></a>
        </div>
    </footer>
    </body>
</html>