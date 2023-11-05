// Zdefiniowanie tablicy obrazów z nazwami, adresami URL obrazów, autorami, opisami i kategoriami.
const paintings = [
    { category: "Category 1", name: "Ornament z przedstawieniem plecionki celtyckiej", image: "https://2.bp.blogspot.com/-lCuEhU6MBJk/USyen7XQjvI/AAAAAAAAAAM/NitSjHTPWho/s1600/PLECIONKACELTYCKA.JPG", author: "Nieznany", description: ""}, //убрать
    { category: "Category 1", name: "Wenus z Willendorfu", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Venus_von_Willendorf_01.jpg/800px-Venus_von_Willendorf_01.jpg", author: "Nieznany", description: "Data powstania: paleolit, około 22000 lat p.n.e. <br> Lokalizacja: Muzeum Historii Naturalnej w Wiedniu"},
    { category: "Category 1", name: "Wenus z Lespugue", image: "https://media.cheggcdn.com/media/030/0304e528-a099-43ce-902e-ff962707eddc/materia___z_historii_sztuki_przed_i_staro__ytnej__page_003_image_0002-167e17dc1d43ec99f39-167E24E051A15CEA0AC.jpg", author: "Nieznany", description: "Data powstania: paleolit, około 26000-25000 lat p.n.e."},
    { category: "Category 1", name: "Bizon z Altamiry (malowidło)", image: "https://cekis.pl/wp-content/uploads/2020/07/95372853_2524253117836628_1009027464397062144_o.jpg", author: "Nieznany", description: "Data powstania: około 15000-10000 lat p.n.e. <br> Lokalizacja: Hiszpania, jaskinia Altamira"},
    { category: "Category 1", name: "Malowidła z Tassili (Algieria) na Saharze", image: "http://3.bp.blogspot.com/-HajZlxN15yo/USyqg1zLsEI/AAAAAAAAACM/1jy_ssq5hCM/s1600/Malowid%C5%82a+z+Tassili+(Algieria)+na+Saharze.jpg", author: "Nieznany", description: "Data powstania: około 10000-6000 lat p.n.e. <br> Lokalizacja: Algeria" },
    { category: "Category 1", name: "Malowidła z Lascaux", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/prehistoria/lascaux_ranny_bizon.jpg", author: "Nieznany", description: "Data powstania: około 17000-15000 lat p.n.e. <br> Lokalizacja: Francja, Akwitanija" },
    { category: "Category 1", name: "Zespół Stonehenge", image: "https://images5.alphacoders.com/131/1318724.jpeg", author: "Nieznany", description: "Data powstania: około 1400 lat p.n.e. <br> Lokalizacja: południowa Anglia" },
    { category: "Category 1", name: "Bogini Matka z Çatal Hüyük", image: "https://www.ifem.pl/wp-content/uploads/2019/03/Siedza%CC%A8ca-Kobieta-z-C%CC%A7atalho%CC%88yu%CC%88k--768x1024.jpg", author: "Nieznany", description: "Data powstania: około 7400-7300 lat p.n.e. <br> Lokalizacja: Muzeum Cywilizacji Anatolijskich w Ankarze" },
    { category: "Category 1", name: "Zabudowa Biskupina", image: "https://www.histurion.pl/grafika/arty/full/800px_biskupin___gate_and_wall.jpg", author: "Nieznany", description: "Data powstania: około 800 lat p.n.e. <br> Lokalizacja: Polska, Biskupin " },
    { category: "Category 2", name: "Zigurat z Ur", image: "https://marchitect.pl/wp-content/uploads/2020/04/6cdb15d9812400820bcf0dd7302ac179-1.jpg", author: "Nieznany", description: "Sztuka starożytnej Mezopotamii <br> Data powstania: około 2100 lat p.n.e. <br> Lokalizacja: Irak, Al-Muqaiyar" },
    { category: "Category 2", name: "Płaskorzeźba Polowanie na lwy z pałacu Assurbanipala w Niniwie", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Nineveh_north_palace_king_hunting_lion.jpg?Sztuka_asyryjska66026656", author: "Nieznany", description: "Sztuka starożytnej Mezopotamii <br> Data powstania: około 668-631 lat p.n.e. <br> Lokalizacja: Irak, Niniwa" },
    { category: "Category 2", name: "Brama bogini Isztar w Babilonie", image: "https://media.istockphoto.com/id/612480994/pl/zdj%C4%99cie/bramy-ishtar-w-babilonie.jpg?s=612x612&w=0&k=20&c=pIBLujUH7ZGEc6ZeVrSTuocHCr1ZwO5SZERAsftQU4k=", author: "Nieznany", description: "Sztuka starożytnej Mezopotamii <br> Data powstania: około 400 lat p.n.e. <br> Lokalizacja: rekonstrukcja znajduje się w Muzeum Pergamońskim w Berlinie" },
    { category: "Category 2", name: "Sztandar z Ur", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/mezopotamia/sztandar_z_ur.jpg", author: "Nieznany", description: "Sztuka starożytnej Mezopotamii <br> Data powstania: około 2900-2334 lat p.n.e. <br> Lokalizacja: Muzeum Brytyjskie " },
    { category: "Category 2", name: "Posąg Gudei z Lagasz ", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/mezopotamia/gudea_z_lagasz.jpg", author: "Nieznany", description: "Sztuka starożytnej Mezopotamii <br> Data powstania: około 2150 lat p.n.e. <br> Lokalizacja: Luwr, Paryż" },
    { category: "Category 2", name: "Stella Hammurabiego", image: "https://elizawydrych.pl/wp-content/uploads/2012/10/kodeks-hammurabiego.jpg", author: "Nieznany", description: "Sztuka starożytnej Mezopotamii <br> Data powstania: około 1772 roku p.n.e. <br> Lokalizacja: Luwr, Paryż" },
    { category: "Category 2", name: "Wiszące ogrody Semiramidy (rekonstrukcja)", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/mezopotamia/ogrody_semiramidy.jpg", author: "Nieznany", description: "Sztuka starożytnej Mezopotamii" },
    { category: "Category 2", name: "Lamassu z pałacu Sargona II w Chorsabad", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/mezopotamia/lamassu.jpg", author: "Nieznany", description: "Sztuka starożytnej Mezopotamii <br> Data powstania: około 700 lat p.n.e. <br> Lokalizacja: Luwr, Paryż " },
    { category: "Category 2", name: "Stela Naramsina", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/mezopotamia/stela_naramsina.jpg", author: "Nieznany", description: "Sztuka starożytnej Mezopotamii <br> Data powstania: około 2254-2218 lat p.n.e. <br> Lokalizacja: Luwr, Paryż" },
    { category: "Category 2", name: "Królewska lira z głową byka z Ur", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/mezopotamia/krolewska_lira_z_ur.jpg", author: "Nieznany", description: "Sztuka starożytnej Mezopotamii <br> Data powstania: około 2600 lat p.n.e. <br> Lokalizacja: Muzeum Brytyjskie " },
    { category: "Category 2", name: "Płaskorzeźba Zraniona Lwica z pałacu Assurbanipala w Niniwie", image: "https://upload.wikimedia.org/wikipedia/commons/0/07/British_Museum_Room_10_lion_hunting.jpg", author: "Nieznany", description: "Sztuka starożytnej Mezopotamii <br> Data powstania: około 668-631 lat p.n.e. <br> Lokalizacja: Muzeum Brytyjskie" },
    { category: "Category 2", name: "Paleta Narmera", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/NarmerPalette_ROM-gamma.jpg/1200px-NarmerPalette_ROM-gamma.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 3100 lat p.n.e. <br> Lokalizacja: Muzeum Egipski w Kairze." },
    { category: "Category 2", name: "Piramida Dżesera w Sakkarze", image: "https://cudaswiata.files.wordpress.com/2009/02/piramida_dzesera.jpg", author: "Imhotep", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 2800-2600 lat p.n.e. <br> Lokalizacja: Egipt, Sakkara" },
    { category: "Category 2", name: "Piramidy w Gizie: Cheopsa, Chefrena i Mykerinosa", image: "https://s3.eu-central-1.amazonaws.com/pressland-cms/cache/article_show_cover/h8/shutterstock-1395519593.jpeg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 2500 lat p.n.e. <br> Lokalizacja: Egipt, Giza " },
    { category: "Category 2", name: "Sfinks", image: "https://ocdn.eu/pulscms-transforms/1/bRok9kqTURBXy8wMmZlOTRlODM5MTIyNGJkODIzNmIwZDU0NWUwZjY4OC5qcGVnk5UDACvNBOjNAsKVAs0EsADDw5MJpmY3NTNhZAbeAAGhMAE/znaleziono-ruiny-drugiego-sfinksa-z-gizy.jpeg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 2500 lat p.n.e. <br> Lokalizacja: Egipt, Giza" },
    { category: "Category 2", name: "Piramida Snofru w Dahszur (Piramida łamana)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/GD-EG-Saqqara004.JPG/1200px-GD-EG-Saqqara004.JPG", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 2620 rok p.n.e. <br> Lokalizacja: Egipt, Dahszur" },
    { category: "Category 2", name: "Plan świątyni egipskiej", image: "https://3.bp.blogspot.com/-Qf2tCDP8ujs/W4Q-FCvReOI/AAAAAAAADcM/Y8Ovb__BL4MRdLcyIE0D-0zyDvZF2qAQACLcBGAs/s1600/karnak_akso.jpg", autor: "Nie ma", description: "Sztuka starożytnego Egiptu" },
    { category: "Category 2", name: "Świątynia Amona - Ra karnak w Luksorze", image: "https://cdn.kastatic.org/ka-perseus-images/b02b406b5032091ff5d22d1e8e4349d516aec867.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 2055-1650 lat p.n.e. <br> Lokalizacja: Egipt" },
    { category: "Category 2", name: "Świątynia królowej Hatszepsut w Deir el Bahari ", image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Hatschepsuttempel.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 1400 lat p.n.e. <br> Lokalizacja: Egipt, Teby" },
    { category: "Category 2", name: "Świątynia Ramzesa II w Abu Simbel", image: "https://pcma.uw.edu.pl/wp-content/uploads/2017/01/AbuSimbel_0_gal.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 1264-1244 lat p.n.e. <br> Lokalizacja: Egipt, Asuan (muhafaza)" },
    { category: "Category 2", name: "Świątynia Nefertete", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Templo_de_Nefertari%2C_Abu_Simbel%2C_Egipto%2C_2022-04-02%2C_DD_153.jpg/1280px-Templo_de_Nefertari%2C_Abu_Simbel%2C_Egipto%2C_2022-04-02%2C_DD_153.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 1264-1244 lat p.n.e. <br> Lokalizacja: Egipt, Asuan (muhafaza)" },
    { category: "Category 2", name: "Świątynia Horusa w Edfu", image: "https://4.bp.blogspot.com/-usqDpkOZKUg/UTSZ50zymaI/AAAAAAAAAOY/dcRUFouqqZI/s1600/swiatyniahorusaedffu.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 237-57 lat p.n.e. <br> Lokalizacja: Egipt, Asuan (muhafaza)" },
    { category: "Category 2", name: "Portrety trumienne z Fajum", image: "https://1.bp.blogspot.com/-kyAPqkIhsw8/U5bKjS8cCgI/AAAAAAAAAPU/ZSxPwUAaUNQ/s1600/fajum01.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około  lat 0-200 n.e. <br> Lokalizacja: - " },
    { category: "Category 2", name: "Skryba z Sakkary", image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/The_seated_scribe.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 2620-2500 lat p.n.e. <br> Lokalizacja: Luwr, Paryż" },
    { category: "Category 2", name: "Posąg Mykerinosa i królowej Chamerernebti", image: "https://i.pinimg.com/originals/56/35/72/563572d65f4e7663d3349bb3087c52f8.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 2500 lat p.n.e. <br> Lokalizacja: Museum Of Fine Art, Boston" },
    { category: "Category 2", name: "Triada króla Mykerinosa", image: "https://4.bp.blogspot.com/-pE5v9PntkrU/US891N1ED6I/AAAAAAAAAJE/GyGhvlU0P9g/s1600/Triada+Mykerinosa.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 2500 lat p.n.e. <br> Lokalizacja: Muzeum Egipskie w Kairze" },
    { category: "Category 2", name: "Przedstawienie Rahotepa i Nofret z Medum", image: "https://upload.wikimedia.org/wikipedia/commons/4/41/%C3%84gyptisches_Museum_Kairo_2016-03-29_Rahotep_Nofret_01.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 2500 lat p.n.e. <br> Lokalizacja: Muzeum Egipskie, Kair" },
    { category: "Category 2", name: "Posąg Kaapera z Sakkary ( Gróby wójt)", image: "https://media.cheggcdn.com/media/5fe/5fe60132-739d-498b-9bfc-1799637a3309/wojt-15AEDE354B57864FD5A.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 2460 rok p.n.e. <br> Lokalizacja: Muzeum Egipskie w Kairze w Egipcie" },
    { category: "Category 2", name: "Zielona Głowa", image: "https://www.historiasztuki.com.pl/ilustracje/RZEZBA/xEgipt-GreenHead-500pne.jpg.pagespeed.ic.LiCEykcah_.webp", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 500 lat p.n.e. <br> Lokalizacja: Altes Museum Berlin" },
    { category: "Category 2", name: "Złota maska Tutenchamona", image: "https://2.bp.blogspot.com/-3Da10vh2nNQ/US9YVGySwfI/AAAAAAAAALY/ufqYAriR47o/s1600/zlota-maska-tutanchamona.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 1341-1323 rok p.n.e. <br> Lokalizacja: Muzeum Egipskie, Kair" },
    { category: "Category 2", name: "Figurki uszebti", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egipt/uszebti.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Miały na celu chronić osobę pochowaną" },
    { category: "Category 2", name: "Głowa królowej Nefretete z Tellel Amarna", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egipt/nefretete.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 1345 rok p.n.e. <br> Lokalizacja: Neues Museum-Muzeum Egipskie" },
    { category: "Category 2", name: "Sarkofag egipski", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egipt/sarkofag.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu" },
    { category: "Category 2", name: "Kolumny i kapitele egipskie", image: "https://lubinokolice.nazwa.pl/pages/images/foto/slownik/kapitel_01.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> 1. Palmowa <br> 2. Hatorycka <br> 3. Lotosowa <br> 4. Papirusowa" },
    { category: "Category 2", name: "Płaskorzeźba z przedstawieniem Echnatona z rodziną", image: "https://2.bp.blogspot.com/-QvqHD_Mq9XY/UTSNFRvEJwI/AAAAAAAAANE/Nvnvskb_qTU/s1600/p%C5%82askorze%C5%BAba+Echnatona+z+rodzin%C4%85.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 1300 lat p.n.e. " },
    { category: "Category 2", name: "Mastaba", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egipt/mastaba.JPG", author: "Nie ma", description: "Sztuka starożytnego Egiptu" },
    { category: "Category 2", name: "Urny kanopskie", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egipt/urny_kanopskie.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu" },
    { category: "Category 2", name: "Wnętrze grobowca Tutenchamona", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egipt/wnetrze_grobowca_tutenchamona.jpg", author: "Nieznany", description: "Sztuka starożytnego Egiptu <br> Data powstania: około 1300-1400 lat p.n.e. <br> Lokalizacja: Egipt " },
    { category: "Category 2", name: "Fragment rzeźby lub malowidła z hieroglifami egipskimi", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egipt/hieroglify.jpg", author: "Nie ma", description: "Sztuka starożytnego Egiptu" },
    { category: "Category 2", name: "Kolumny z pałacu w Knossos", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egea/knossos.jpg", author: "Nieznany", description: "Sztuka świata egejskiego <br> Data powstania: około 1800-1700 lat p.n.e. <br> Lokalizacja: Grecja, Kreta" },
    { category: "Category 2", name: "Woltyżerka na byku", image: "http://1.bp.blogspot.com/-GOvFmuYV1Pw/UT2eFl3AHEI/AAAAAAAAAWI/7Ch0G5mSzfU/s1600/wolty%C5%BCerka+na+byku+-+knossos.JPG", author: "Nieznany", description: "Sztuka świata egejskiego <br> Data powstania: około 1400-1300 lat p.n.e." },
    { category: "Category 2", name: "Książe wśród lilii", image: "http://2.bp.blogspot.com/-0uh0uGewnz4/UT2bAUJKYhI/AAAAAAAAAVY/ebhtHlIIvqQ/s1600/Knossos-ksiaze-z-piorami(LILIOWY+KSIAZE).jpg", author: "Nieznany", description: "Sztuka świata egejskiego <br> Data powstania: około 1400-1300 lat p.n.e." },
    { category: "Category 2", name: "Paryżanka", image: "http://3.bp.blogspot.com/-LWWEyIeRbHM/UT2cqYusixI/AAAAAAAAAVk/PN7VqFLqElU/s1600/Knossos-fresk-paryzanka.jpg", author: "Nieznany", description: "Sztuka świata egejskiego <br> Data powstania: około 1400-1300 lat p.n.e." },
    { category: "Category 2", name: "Waza kreteńska z ośmiornicą", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egea/waza_z_osmiornica.jpg", author: "Nieznany", description: "Sztuka świata egejskiego <br> Data powstania: około 1700 lat p.n.e." },
    { category: "Category 2", name: "Plan pałacu w Knososs ", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egea/knossos_plan_palacu.jpg", author: "Nieznany", description: "Sztuka świata egejskiego <br> Data powstania: około 1800-1700 lat p.n.e." },
    { category: "Category 2", name: "Sala tronowa w Knossos", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egea/knossos_sala_tronowa.jpg", author: "Nieznany", description: "Sztuka świata egejskiego <br> Data powstania: około 1800-1700 lat p.n.e." },
    { category: "Category 2", name: "Kobieta kapłan - Figurka z przedstawieniem bogini z wężami z Knossos", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egea/knossos_bogini_z_wezami.jpg", author: "Nieznany", description: "Sztuka świata egejskiego <br> Data powstania: około 1700 lat p.n.e. <br> Lokalizacja:  Muzeum Archeologiczne w Heraklionie, Kreta" },
    { category: "Category 2", name: "Ryton w kształcie głowy byka", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egea/ryton.jpg", author: "Nieznany", description: "Sztuka świata egejskiego <br> Data powstania: około 1600 lat p.n.e. <br> Lokalizacja: Muzeum Archeologiczne w Heraklionie, Kreta" },
    { category: "Category 2", name: "Brama Lwów w Mykenach", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egea/lwia_brama_w_mykenach.jpg", author: "Nieznany", description: "Sztuka świata egejskiego <br> Data powstania: około 1300-1200 lat p.n.e. <br> Lokalizacja: Mykeny" },
    { category: "Category 2", name: "Złota maska grobowa Agamemnona z Myken", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egea/zlota_maska_agamemnona.JPG", author: "Nieznany", description: "Sztuka świata egejskiego <br> Data powstania: około 1500 lat p.n.e. <br> Lokalizacja: Narodowe Muzeum Archeologiczne w Atenach" },
    { category: "Category 2", name: "Skarbiec Atreusza", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Treasury_of_Atreus_Mycenae.jpg/1280px-Treasury_of_Atreus_Mycenae.jpg", author: "Nieznany", description: "Sztuka świata egejskiego <br> Data powstania: około 1250 lat p.n.e. <br> Lokalizacja: Grecja, Mykeny" },
    { category: "Category 2", name: "Dysk z Fajtos", image: "https://ocdn.eu/pulscms-transforms/1/B5ektkpTURBXy9iZTFkOTdmNmQwMjY2MWRmZGNjNjQ2MTA3NDEyNzE1OC5qcGeRlQLNAwAAwsM", author: "Nieznany", description: "Sztuka świata egejskiego <br> Data powstania: około 1650-1600 lat p.n.e. <br> Lokalizacja: Muzeum Archeologiczne w Heraklionie na Krecie" },
    { category: "Category 2", name: "Rekonstrukcja megaronu", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/egea/rekonstrukcja_megaronu.jpg", author: "Nie ma", description: "Sztuka świata egejskiego <br> Megaron - typ domu mieszkalnego z ogniskiem po środku" },
    { category: "Category 2", name: "Porządek dorycki", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/grecja/porzadek_dorycki.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około IX poł.- VI w.p.n.e." },
    { category: "Category 2", name: "Porządek joński", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/grecja/porzadek_jonski.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około V - IV w. p.n.e." },
    { category: "Category 2", name: "Porządek koryncki", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/grecja/porzadek_koryncki.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 330-30 lat p.n.e." },
    { category: "Category 2", name: "Plan akropolu ateńskiego", image: "https://3.bp.blogspot.com/-riMuuUV2Jf0/UTUXxuqM25I/AAAAAAAAAUI/fO2-5FCfM5Y/s1600/Akropol.gif", author: "Nieznany", description: "Sztuka starożytnej Grecji" },
    { category: "Category 2", name: "Partenon na akropolu ateńskim", image: "https://aleklasa.pl/wp-content/uploads/2018/05/Partenon-bis.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 431 rok p.n.e. <br> Lokalizacja: Grecja, Ateny" },
    { category: "Category 2", name: "Erechtejon", image: "https://img.freepik.com/premium-zdjecie/ruiny-swiatyni-erechtejon-na-akropolu-ateny-grecja_439918-542.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 406 rok p.n.e. <br> Lokalizacja: Grecja, Ateny" },
    { category: "Category 2", name: "Kariatyda - podpora architektoniczna w formie postaci, najczęściej kobiecej spełniającej funkcję kolumny", image: "https://i1.wp.com/design-fly.ru/wp-content/uploads/2017/01/%D0%B02-13.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji" },
    { category: "Category 2", name: "Świątynia Ateny – Nike (Nike Apteros)", image: "https://o.quizlet.com/duPaxKu1dsbqT.XGtlKBFA.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 425 lat p.n.e. <br> Lokalizacja: Grecja, Ateny" },
    { category: "Category 2", name: "Propyleje", image: "https://s3.eu-central-1.amazonaws.com/pressland-cms/cache/__original__/x3/20140407-athenes16.jpeg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 437 lat p.n.e. <br> Lokalizacja: Grecja, Ateny" },
    { category: "Category 2", name: "", image: "", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około  lat p.n.e. <br> Lokalizacja: " },
    { category: "Category 2", name: "", image: "", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około  lat p.n.e. <br> Lokalizacja: " },
    { category: "Category 2", name: "", image: "", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około  lat p.n.e. <br> Lokalizacja: " },
    { category: "Category 2", name: "", image: "", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około  lat p.n.e. <br> Lokalizacja: " },



    // Można dodać więcej
];

// Funkcja losowo tasująca tablicę obrazów
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Funkcja losowej zmiany obrazu bez powtórzeń
function changePainting() {
    // Wyłącz przycisk lub klikalny obszar, aby zapobiec wielokrotnym kliknięciom podczas przejścia.
    flipCardButton.disabled = true; // Wyłącz przycisk
    clickableImage.removeEventListener('click', toggleFlip); // Usuń detektor zdarzeń kliknięcia

    // Pobierz wszystkie wybrane kategorie
    const selectedCategories = Array.from(document.querySelectorAll('.category-checkbox:checked')).map(checkbox => checkbox.value);

    if (selectedCategories.length === 0 || selectedCategories.includes("All")) {
        // Jeśli wybrano opcję "Wszystkie" lub nie wybrano żadnych kategorii, wyświetlane są wszystkie obrazy
        displayRandomPainting(paintings);
        return;
    }

    // Filtruj obrazy według wybranych kategorii
    const filteredPaintings = paintings.filter(painting => selectedCategories.includes(painting.category));

    if (filteredPaintings.length === 0) {
        // Brak obrazów w wybranych kategoriach, postępuj z tym przypadkiem zgodnie z potrzebami
        console.log('Brak obrazów w wybranych kategoriach');
        return;
    }

    // Odfiltruj obrazy, które były już wyświetlane w wybranych kategoriach
    const availablePaintings = filteredPaintings.filter(painting => !displayedPaintings.includes(painting));

    if (availablePaintings.length === 0) {
        // Wszystkie obrazy w wybranych kategoriach zostały wyświetlone, wyświetl komunikat
        alert('Wszystkie zdjęcia w tej kategorii zostały obejrzane, odśwież stronę.');
        return;
    }

    // Tasuj dostępne obrazy, aby losowo zmieniać ich kolejność
    shuffleArray(availablePaintings);

    // Wyświetlenie pierwszego obrazu z przetasowanej listy
    displayRandomPainting(availablePaintings);
}

// Funkcja aktualizująca obraz na podstawie wyboru kategorii
function updatePaintingByCategory() {
    // Wyłącz przycisk lub klikalny obszar, aby zapobiec wielokrotnym kliknięciom podczas przejścia.
    flipCardButton.disabled = true; // Wyłącz przycisk
    clickableImage.removeEventListener('click', toggleFlip); // Usuń detektor zdarzeń kliknięcia

    // Wywołanie funkcji changePainting w celu zaktualizowania obrazu na podstawie wyboru kategorii
    changePainting();
}

function displayRandomPainting(paintingsArray) {
    if (paintingsArray.length === 0) {
        // Postępowanie w przypadku braku dostępnych obrazów
        console.log('Brak dostępnych obrazów do wyświetlenia.');
        return;
    }

    // Upewnij się, że ten sam obraz nie jest wyświetlany po kolei.
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * paintingsArray.length);
    } while (paintingsArray[randomIndex] === lastDisplayedPainting);

    const painting = paintingsArray[randomIndex];
    lastDisplayedPainting = painting;

    // Dodaj wyświetlany obraz do listy
    displayedPaintings.push(painting);

    // Przed zmianą obrazu i treści należy zawsze odwrócić kartę na przednią stronę
    cardInner.classList.remove('flipped'); // Remove the 'flipped' class

    // Ustawianie tytułu obrazu z oddzielnymi akapitami
    cardTitle.innerHTML = `<span class="title">Tytuł: </span><span class="title-content">${painting.name}</span>`;

    // Ustawianieautora obrazu za pomocą oddzielnych akapitów
    cardAuthor.innerHTML = `<span class="author">Autor: </span><span class="author-content">${painting.author}</span>`;

    // Ustawianie opisu obrazu
    cardDescription.innerHTML = `<span class="description">${painting.description}</span>`;

    // Ustawianie źródła obrazu
    cardImage.src = painting.image;

    // Ponowne włączenie przycisku i klikalnego obszaru po przejściu
    setTimeout(() => {
        flipCardButton.disabled = false; // Ponowne włączenie przycisku
        clickableImage.addEventListener('click', toggleFlip); // Dodaj detektor zdarzeń kliknięcia
    }, 10); // Dostosowanie limitu czasu w razie potrzeby, aby dopasować go do czasu przejścia.

    if (availablePaintings.length === 0) {
        // Wszystkie obrazy w wybranych kategoriach zostały wyświetlone, zresetuj listę
        displayedPaintings = [];
    }
}

// Inicjalizacja wyświetlanej listy obrazów
let displayedPaintings = [];
let lastDisplayedPainting = null;

const card = document.querySelector('.card');
const cardInner = document.querySelector('.card-inner');
const clickableImage = document.getElementById('clickableImage');
const cardImage = document.querySelector('.front img');
const cardTitle = document.querySelector('.back .painting-title'); // Select the painting title element
const cardAuthor = document.querySelector('.back .painting-author'); // Select the painting author element
const cardDescription = document.querySelector('.back .painting-description'); // Select the painting description element
const flipCardButton = document.getElementById('flipCard');
const nextButton = document.getElementById('nextButton'); // Assuming you have a "Next" button

// Funkcja przełączania "odwróconej" klasy
function toggleFlip() {
    cardInner.classList.toggle('flipped');
}

// Przełączanie klasy "odwrócony" po kliknięciu obrazu
clickableImage.addEventListener('click', toggleFlip);

// Dodaj detektor zdarzeń kliknięcia do przycisku, aby zmienić obraz
flipCardButton.addEventListener('click', changePainting);

// Dodaj detektor zdarzeń kliknięcia do przycisku DALEJ->, aby zmienić obraz
nextButton.addEventListener('click', changePainting);

// Dodanie detektorów zdarzeń do pól wyboru kategorii
const categoryCheckboxes = document.querySelectorAll('.category-checkbox');
categoryCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updatePaintingByCategory);
});

// Wstępne wyświetlanie obrazu
displayRandomPainting(paintings);

// Get a reference to the reload button by its id
var reloadButton = document.getElementById('reloadButton');

// Add a click event listener to the button
reloadButton.addEventListener('click', function () {
    // Use the location object to reload the current page
    location.reload();
});