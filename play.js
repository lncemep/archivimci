// Zdefiniowanie tablicy obrazów z nazwami, adresami URL obrazów, autorami, opisami i kategoriami.
const paintings = [
    { category: "Category 1", name: "Ornament z przedstawieniem plecionki celtyckiej", image: "https://2.bp.blogspot.com/-lCuEhU6MBJk/USyen7XQjvI/AAAAAAAAAAM/NitSjHTPWho/s1600/PLECIONKACELTYCKA.JPG", author: "Nieznany", description: "" }, //убрать
    { category: "Category 1", name: "Wenus z Willendorfu", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Venus_von_Willendorf_01.jpg/800px-Venus_von_Willendorf_01.jpg", author: "Nieznany", description: "Data powstania: paleolit, około 22000 lat p.n.e. <br> Lokalizacja: Muzeum Historii Naturalnej w Wiedniu" },
    { category: "Category 1", name: "Wenus z Lespugue", image: "https://media.cheggcdn.com/media/030/0304e528-a099-43ce-902e-ff962707eddc/materia___z_historii_sztuki_przed_i_staro__ytnej__page_003_image_0002-167e17dc1d43ec99f39-167E24E051A15CEA0AC.jpg", author: "Nieznany", description: "Data powstania: paleolit, około 26000-25000 lat p.n.e." },
    { category: "Category 1", name: "Bizon z Altamiry (malowidło)", image: "https://cekis.pl/wp-content/uploads/2020/07/95372853_2524253117836628_1009027464397062144_o.jpg", author: "Nieznany", description: "Data powstania: około 15000-10000 lat p.n.e. <br> Lokalizacja: Hiszpania, jaskinia Altamira" },
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
    { category: "Category 2", name: "Plan Pergamonu", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/grecja/pergamon.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji" },
    { category: "Category 2", name: "Teatr w Epidauros", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Theatre_of_Epidaurus_OLC.jpg/1200px-Theatre_of_Epidaurus_OLC.jpg", author: "Poliklet Młodszy", description: "Sztuka starożytnej Grecji <br> Data powstania: około 330 rok p.n.e. <br> Lokalizacja:Grecja, Epidauros " },
    { category: "Category 2", name: "Świątynia Artemidy (Artemizjon) w Efezie ", image: "https://static.wikia.nocookie.net/artemisfowl/images/c/c8/%C5%9Awi%C4%85tynaArtemis.jpg/revision/latest?cb=20150315150537&path-prefix=pl", author: "Chersifron", description: "Sztuka starożytnej Grecji <br> Data powstania: około 260 lat p.n.e. <br> Lokalizacja: Turcja " },
    { category: "Category 2", name: "Posąg kurosa z Melos", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/grecja/kuros_z_melos.JPG", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 550 lat p.n.e. <br> Lokalizacja: Narodowe Muzeum Archeologiczne w Atenach " },
    { category: "Category 2", name: "Posąg Woźnicy z Delf", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/grecja/woznica_z_delf.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 474 rok p.n.e. <br> Lokalizacja: Muzeum Delfickie " },
    { category: "Category 2", name: "Moschoforos", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/grecja/moschoforos.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 560 lat p.n.e. <br> Lokalizacja: Muzeum Akropolu w Atenach " },
    { category: "Category 2", name: "Posąg Ateny Partenos ", image: "https://zabytkoznawcy.files.wordpress.com/2013/08/athena-photogarylaida.jpg", author: "Fidiasz", description: "Sztuka starożytnej Grecji <br> Data powstania: około 447-438 lat p.n.e." },
    { category: "Category 2", name: "Tyranobójcy", image: "https://www.historiasztuki.com.pl/ilustracje/RZEZBA/xGrearch-Tyranobojcy.jpg.pagespeed.ic.nFV93Ow8UM.webp", author: "Antenor", description: "Sztuka starożytnej Grecji <br> Data powstania: około 477-476 lat p.n.e. <br> Lokalizacja: Muzeum Narodowy w Neapolu " },
    { category: "Category 2", name: "Odpoczywający Dionizos", image: "https://www.historiasztuki.com.pl/ilustracje/RZEZBA/xGreklas-Fidiasz-Dionysos-Parthenon.jpg.pagespeed.ic.nNGzBnngJV.webp", author: "Fidiasz", description: "Sztuka starożytnej Grecji <br> Data powstania: około 447-433 lat p.n.e. <br> Lokalizacja: British Museum" },
    { category: "Category 2", name: "Apollo Kassel", image: "https://www.historiasztuki.com.pl/ilustracje/RZEZBA/xGreklas-Apollo_Kassel.jpg.pagespeed.ic.-VzJtD_SmJ.webp", author: "Fidiasz", description: "Sztuka starożytnej Grecji <br> Data powstania: około 450 lat p.n.e. <br> Lokalizacja: Luwr" },
    { category: "Category 2", name: "Metopa Partenonu", image: "https://www.historiasztuki.com.pl/ilustracje/GRECRZEZBA/xPart,P20met,P207.jpg.pagespeed.ic.SRV6ok_Yg3.webp", author: "Fidiasz", description: "Sztuka starożytnej Grecji" },
    { category: "Category 2", name: "Discobolus Lancelotti", image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Discobolus_Lancelotti_Massimo.jpg", author: "Myron", description: "Sztuka starożytnej Grecji <br> Data powstania: około 460-450 lat p.n.e. <br> Lokalizacja: The Glyptothek in Munich" },
    { category: "Category 2", name: "Doryphoros", image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/A_well-preserved_Roman_period_copy_of_the_Doryphoros_of_Polykleitos_cast_circa_440_BC%2C_from_the_time_of_Tiberius_%2814-37_AD%29%2C_found_in_Pompeii%2C_Moi%2C_Auguste%2C_Empereur_de_Rome_exhibition%2C_Grand_Palais%2C_Paris.jpg", author: "Poliklet", description: "Sztuka starożytnej Grecji <br> Data powstania: około 440 lat p.n.e. <br> Lokalizacja: Muzeum Puszkina, Moskwa" },
    { category: "Category 2", name: "Młodzieniec zawiązujący wstążkę, Diadoumenos ", image: "https://www.historiasztuki.com.pl/ilustracje/RZEZBA/xGreklas-Polykleitos-Diadoumenos.jpg.pagespeed.ic.QEhDDGF5Mf.webp", author: "Poliklet", description: "Sztuka starożytnej Grecji <br> Data powstania: około 420 lat p.n.e. <br> Lokalizacja: Narodowe Muzeum Archeologiczne w Atenach " },
    { category: "Category 2", name: "Afrodyta Knidos", image: "https://www.historiasztuki.com.pl/ilustracje/RZEZBA/xGreklas-Afrodyta-Knidos.jpg.pagespeed.ic.dfDguE7ltZ.webp", author: "Praksyteles", description: "Sztuka starożytnej Grecji <br> Data powstania: około 360 lat p.n.e." },
    { category: "Category 2", name: "Odpoczywający satyr", image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/S%C3%A1tiro_en_reposo_%28Museo_del_Prado_E-30%29_01a.jpg", author: "Praksyteles", description: "Sztuka starożytnej Grecji <br> Data powstania: IV wiek p.n.e." },
    { category: "Category 2", name: "Hermes z małym Dionizosem", image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Hermes_di_Prassitele%2C_at_Olimpia%2C_front.jpg", author: "Praksyteles", description: "Sztuka starożytnej Grecji <br> Data powstania: IV wiek p.n.e. <br> Lokalizacja: Muzeum Archeologiczne w Olimpii" },
    { category: "Category 2", name: "Apollo Sauroktonos (Apollo zabijający jaszczurkę)", image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Apollo_Saurocton_Louvre.jpg", author: "Praksyteles", description: "Sztuka starożytnej Grecji <br> Data powstania: IV wiek p.n.e. <br> Lokalizacja: Luwr" },
    { category: "Category 2", name: "Apoxyomenos", image: "https://www.historiasztuki.com.pl/ilustracje/RZEZBA/xGreklas-Lizyp-Apoxyomenos.jpg.pagespeed.ic.SH5xWhjvOE.webp", author: "Lizyp", description: "Sztuka starożytnej Grecji <br> Data powstania: IV wiek p.n.e." },
    { category: "Category 2", name: "Odpoczywający Herakles ", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/grecja/lizyp_herakles_farnese.JPG", author: "Lizyp", description: "Sztuka starożytnej Grecji <br> Data powstania: około  lat p.n.e. <br> Lokalizacja: Narodowe Muzeum Archeologiczne, Neapol " },
    { category: "Category 2", name: "Bachantka", image: "https://i.pinimg.com/originals/1c/62/9b/1c629b3a7165f736d08f19241a3052e4.jpg", author: "Skopas", description: "Sztuka starożytnej Grecji <br> Data powstania: IV wiek p.n.e. " },
    { category: "Category 2", name: "Nike zawiązująca sandał – płaskorzeźba", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/grecja/nike_zawiazujaca_sandal.jpg", author: "Poliklet", description: "Sztuka starożytnej Grecji <br> Data powstania: V wiek p.n.e. <br> Lokalizacja: Muzeum Akropolu w Atenach" },
    { category: "Category 2", name: "Achilles i Ajaks grające w kości", image: "https://matura-z-historii-sztuki.pl/wp-content/uploads/2017/08/Achillesa-i-Ajaksa-graja%CC%A8cych-w-kos%CC%81ci-Eksekias-ok.-530-525-p.n.e.-styl-czarnofigurowy-582x400.jpg", author: "Eksekias", description: "Sztuka starożytnej Grecji <br> Data powstania: około 530-525 lat p.n.e. <br> Lokalizacja: Vulci, Italia" },
    { category: "Category 2", name: "waza François ", image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Attic_Black-Figure_Volute-Krater%2C_known_as_the_Francois_vase%2C_ca._570-565_BCE.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 570 lat p.n.e. <br> Lokalizacja: Narodowe Muzeum Archeologiczne we Florencji " },
    { category: "Category 2", name: "Ołtarz pergamoński", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/grecja/oltarz_pergamonski%20(1).jpg", author: "Menekrates z Rodos", description: "Sztuka starożytnej Grecji <br> Data powstania: około 180-160 lat p.n.e. <br> Lokalizacja: Muzeum Pergamońskie w Berlinie" },
    { category: "Category 2", name: "Umierający Gal", image: "https://roma-nonpertutti.com/storage/images/articles/329/umierajacy-gal-musei-capitolini-Rome-5bd72e5eb1080.jpeg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 230 lat p.n.e. <br> Lokalizacja: Muzea Kapitolińskie" },
    { category: "Category 2", name: "Gal zabijający siebie i żonę ", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/grecja/gal_ludovisi.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 220 lat p.n.e.  " },
    { category: "Category 2", name: "Chłopiec wyciągający cierń z nogi", image: "https://imperiumromanum.pl/wp-content/uploads/2017/01/facebook_1484160489808.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 1-100 lat n.e. <br> Lokalizacja: Muzea Kapitolińskie" },
    { category: "Category 2", name: "Apollo Belwederski", image: "https://uploads6.wikiart.org/00309/images/ancient-greek-painting/apollo-belvedere.jpg!Large.jpg", author: "Leochares", description: "Sztuka starożytnej Grecji <br> Data powstania: około 330-320 lat p.n.e. <br> Lokalizacja: Muzea Watykańskie" },
    { category: "Category 2", name: "Wenus z Milo", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/grecja/wenus_z_milo.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 130-100 lat p.n.e. <br> Lokalizacja: Luwr" },
    { category: "Category 2", name: "Grupa Laokoona", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/grecja/grupa_laokona.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 50 lat p.n.e. <br> Lokalizacja: Muzea Watykańskie" },
    { category: "Category 2", name: "Nike z Samotraki", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Victoire_de_Samothrace_-_Musee_du_Louvre_-_20190812.jpg/1200px-Victoire_de_Samothrace_-_Musee_du_Louvre_-_20190812.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 190 lat p.n.e. <br> Lokalizacja: Luwr" },
    { category: "Category 2", name: "Pomnik Lizykratesa", image: "https://upload.wikimedia.org/wikipedia/commons/0/06/%CE%9C%CE%BD%CE%B7%CE%BC%CE%B5%CE%AF%CE%BF_%CF%84%CE%BF%CF%85_%CE%9B%CF%85%CF%83%CE%B9%CE%BA%CF%81%CE%AC%CF%84%CE%B7_6122.jpg", author: "Nieznany", description: "Sztuka starożytnej Grecji <br> Data powstania: około 335-334 lat p.n.e. <br> Lokalizacja: Grecja, Ateny" },
    { category: "Category 2", name: "Sarkofag małżonków z Cerveteri (Caere)", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/etruskowie/sarkofag_z_cerveteri.jpg", author: "Nieznany", description: "Sztuka etruska <br> Data powstania: około 530-520 lat p.n.e. <br> Lokalizacja: Narodowe Muzeum Etruskie w Rzymie " },
    { category: "Category 2", name: "Wilczyca kapitolińska", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/etruskowie/wilczyca.JPG", author: "Nieznany", description: "Sztuka etruska <br> Data powstania: około 480-470 lat p.n.e. <br> Lokalizacja: Muzea Kapitolińskie" },
    { category: "Category 2", name: "Apollo z Veii", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/etruskowie/apollo_z_veii.jpg", author: "Wulka", description: "Sztuka etruska <br> Data powstania: około 550-520 lat p.n.e. <br> Lokalizacja: Narodowe Muzeum Etruskie" },
    { category: "Category 2", name: "Orator, Mówca", image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/L%27Arringatore.jpg", author: "Nieznany", description: "Sztuka etruska <br> Data powstania: około II-I wiek p.n.e. <br> Lokalizacja: Narodowe Muzeum Archeologiczne we Florencji" },
    { category: "Category 2", name: "Chimera z Arezzo", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/etruskowie/chimera_z_arezzo.JPG", author: "Nieznany", description: "Sztuka etruska <br> Data powstania: około 300-350 lat p.n.e. <br> Lokalizacja: Narodowe Muzeum Archeologiczne we Florencji" },
    { category: "Category 2", name: "Przykładowe naczynie ceramiczne typu bucchero", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/etruskowie/ceramika_bucchero.JPG", author: " - ", description: "Sztuka etruska" },
    { category: "Category 2", name: "Tancerka", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/etruskowie/tancerka.JPG", author: " - ", description: "Sztuka etruska <br> Przykładowe malowidło z grobowców" },
    { category: "Category 2", name: "Brutus Kapitoliński", image: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Capitoline_Brutus_Musei_Capitolini_MC1183_05.jpg", author: "Nieznany", description: "Sztuka etruska <br> Data powstania: IV - III wiek p.n.e. <br> Lokalizacja: Muzea Kapitolińskie" },
    { category: "Category 2", name: "Widok grobowca etruskiego z zewnątrz", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/etruskowie/grobiec_etruski.jpg", author: "Nieznany", description: "Sztuka etruska" },
    { category: "Category 2", name: "Ornament: bukranion", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/rzym/ornament_bukranion.jpg", author: " - ", description: "Sztuka starożytnego Rzymu" },
    { category: "Category 2", name: "Porządek kompozytowy", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/rzym/porzadek_kompozytowy.jpg", author: " - ", description: "Sztuka starożytnego Rzymu" },
    { category: "Category 2", name: "Porządek toskański ", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/rzym/porzadek_toskanski.jpg", author: " - ", description: "Sztuka starożytnego Rzymu" },
    { category: "Category 2", name: "Plany bazylik rzymskich", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/rzym/bazyliki.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu" },
    { category: "Category 2", name: "Świątynia Westy w Tivoli ", image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Temple_de_Vesta_de_Tivoli.JPG", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: początek I wieku p.n.e. <br> Lokalizacja: Włochy, Tivoli " },
    { category: "Category 2", name: "Panteon w Rzymie", image: "https://lh3.googleusercontent.com/p/AF1QipMZZUjB9LOvxFVdcKpWRjSKF8cGxLxwmRAKNSis=s1360-w1360-h1020", author: "Marek Agrypa", description: "Sztuka starożytnego Rzymu <br> Data powstania: 125 rok n.e. <br> Lokalizacja: Włochy, Rzym " },
    { category: "Category 2", name: "Amfiteatr Flawiuszów (Koloseum) ", image: "https://sciezkimojegoswiata.com/wp-content/uploads/2020/10/20171111-141429.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: 80 rok n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 2", name: "Bazylika Maksencjusza", image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Basilica_di_Massenzio_e_Costantino_09feb08_01.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: 313 rok n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 2", name: "Łuk Tytusa", image: "https://roma-nonpertutti.com/storage/wysiwyg/images/5ba13df7cbae6.jpeg", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: I wiek n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 2", name: "Łuk Konstantyna", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/rzym/luk_konstantyna.JPG", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: 315 rok n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 2", name: "Łuk Septymiusza Sewera", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/rzym/luk_septymiusza_sewera.JPG", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: 203 rok n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 2", name: "Forum Romanum ", image: "https://cdn.getyourguide.com/img/location/535e42f7ac585.jpeg/99.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br>  Lokalizacja: Włochy, Rzym" },
    { category: "Category 2", name: "Circus Maximus", image: "https://imperiumromanum.pl/wp-content/uploads/2015/01/8cdccefba7a81f403ece84970187892e.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: około IV w. p.n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 2", name: "Mauzoleum Hadriana", image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Angyalvar036.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: 139 rok n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 2", name: "Grobowiec Cecylii Metelli", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Rome_Tombe_van_Caecilia_Metella_13-01-2011_12-51-22.JPG/1200px-Rome_Tombe_van_Caecilia_Metella_13-01-2011_12-51-22.JPG", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: I w. p.n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 2", name: "Świątynia Gajusza i Lucjusza w Maison Carree ", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Maison_Carree_in_Nimes_%2816%29.jpg/800px-Maison_Carree_in_Nimes_%2816%29.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: około 10 roku n.e. <br> Lokalizacja: Francja, Nimes" },
    { category: "Category 2", name: "Kolumna Trajana", image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Traijan%27s_Column_2013-2.jpg", author: "Apollodoros z Damaszku", description: "Sztuka starożytnego Rzymu <br> Data powstania: 113 rok n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 2", name: "Forum Trajana (plan)", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/rzym/forum_trajana_plan.jpg", author: " - ", description: "Sztuka starożytnego Rzymu " },
    { category: "Category 2", name: "Termy Karakalli", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/rzym/termy_karakalii.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: 216-217 rok n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 2", name: "Akwedukt Pont du Gard", image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Pont_du_Gard_%2830%29.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: około IV w.n.e. <br> Lokalizacja: Francja, Nîmes" },
    { category: "Category 2", name: "Ara Pacis (Ołtarz Pokoju) ", image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Ara_Pacis_Rom.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: 9 lat p.n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 2", name: "Statua Barberini", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/rzym/statua_barberini.JPG", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: I w. p.n.e. <br> Lokalizacja: Muzea Kapitolińskie, Rzym" },
    { category: "Category 2", name: "Posąg konny Marka Aureliusza w Rzymie", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/0_Marcus_Aurelius_-_Piazza_del_Campidoglio_%281%29.JPG", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: 175 rok n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 2", name: "Posąg cesarza Augusta z Prima Porta", image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Statue-Augustus.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: około 20 lat p.n.e. <br> Lokalizacja: Muzea Watykańskie" },
    { category: "Category 2", name: "Portret Seneki", image: "https://o.quizlet.com/.MzCdrQdwXMSr3UJ6n9W0w.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: około I w. p.n.e." },
    { category: "Category 2", name: "Portret Flawijki", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/rzym/flawijka.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu  " },
    { category: "Category 2", name: "Flora tzw. Primavera", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/rzym/flora_ze_stabie.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: I w. n.e. <br> Lokalizacja: fresk z domu w Stabiach" },
    { category: "Category 2", name: "Portret Dziewczyny z rylcem", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/rzym/portret_dziewczyny_z_rylcem_Safona.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: I w. n.e. <br> Lokalizacja: muzeum w Neapolu" },
    { category: "Category 2", name: "Mozaika czarnobiała Cave Canem", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/rzym/mozaika_cave_canem.JPG", author: " - ", description: "Sztuka starożytnego Rzymu " },
    { category: "Category 2", name: "Kolumna Marka Aureliusza", image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Rome_Column_of_Marcus_Aurelius_2020.jpg", author: "Nieznany", description: "Sztuka starożytnego Rzymu <br> Data powstania: 196 rok n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 2", name: "Freski z domu Wettiuszów w Pompejach", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/rzym/rekonstrukcja_domu_wettiuszow.JPG", author: "Nieznany", description: "Sztuka starożytnego Rzymu " },
    { category: "Category 3", name: "Ornament wczesnochrześcijański z monogramem Chrystusa", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/chrzescijanstwo/ornament_wczesnochrzescijanski_z_monogramem_chrystusa.jpg", author: " - ", description: "Sztuka wczesnochrześcijańska" },
    { category: "Category 3", name: "Postać oranta", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/chrzescijanstwo/orant.jpg", author: " - ", description: "Sztuka wczesnochrześcijańska" },
    { category: "Category 3", name: "Rekonstrukcja wczesnochrześcijańskiej bazyliki św. Piotra w Rzymie", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/chrzescijanstwo/bazylika_sw_piotra_w_rzymie_rekonstrukcja%20(1).JPG", author: "Nieznany", description: "Sztuka wczesnochrześcijańska" },
    { category: "Category 3", name: "Mauzoleum Santa Constanza ", image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Facade_-_Santa_Costanza_-_Rome_2016.jpg", author: "Nieznany", description: "Sztuka wczesnochrześcijańska <br> Data powstania: 337-351 rok n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 3", name: "Katakumby z malowidłami ", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/chrzescijanstwo/katakumby.JPG", author: "Nieznany", description: "Sztuka wczesnochrześcijańska <br> Data powstania: okołó III w. n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 3", name: "Bazylika San Apollinare Nuovo w Rawennie", image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Basilica_Sant%27Apollinare_Nuovo_Ravenna.jpg", author: "Nieznany", description: "Sztuka wczesnochrześcijańska <br> Data powstania: VI w. n.e. <br> Lokalizacja: Włochy, Rawenna" },
    { category: "Category 3", name: "Bazylika św. Pawła za Murami", image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Roma_San_Paolo_fuori_le_mura_BW_1.JPG", author: "Nieznany", description: "Sztuka wczesnochrześcijańska <br> Data powstania: 386-440 rok n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 3", name: "Bazylika Matki Boskiej Większej", image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Rome_Santa_Maria_Maggiore_2020_P26_Facade.jpg", author: "Nieznany", description: "Sztuka wczesnochrześcijańska <br> Data powstania: V w. n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 3", name: "Bazylika św. Jana na Lateranie", image: "https://upload.wikimedia.org/wikipedia/commons/9/92/Rome_San_Giovanni_in_Laterano_2020_P01_Facade.jpg", author: "Nieznany", description: "Sztuka wczesnochrześcijańska <br> Data powstania: 314-318 rok n.e. <br> Lokalizacja: Włochy, Rzym" },
    { category: "Category 3", name: "Kościół San Vitale w Rawennie", image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Basilica_di_San_Vitale%2C_Ravenna%2C_Italia_%281%29.JPG", author: "Nieznany", description: "Sztuka wczesnochrześcijańska <br> Data powstania: 548 rok n.e. <br> Lokalizacja: Włochy, Rawenna" },
    { category: "Category 3", name: "Baptysterium Arian w Rawennie", image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Baptistery.Arians02.jpg", author: "Nieznany", description: "Sztuka wczesnochrześcijańska <br> Data powstania: V wiek n.e. <br> Lokalizacja: Włochy, Rawenna" },
    { category: "Category 3", name: "Mauzoleum Galii Placydii w Rawennie", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Ravnna-gallaplacidia.jpg", author: "Nieznany", description: "Sztuka wczesnochrześcijańska <br> Data powstania: V wiek n.e. <br> Lokalizacja: Włochy, Rawenna" },
    { category: "Category 3", name: "Mozaika z przedstawieniem Chrystusa Pantokratora z Monreale na Sycylii", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/chrzescijanstwo/chrystus_pantokrator_z_monreale.jpg", author: "Nieznany", description: "Sztuka wczesnochrześcijańska" },
    { category: "Category 3", name: "Chrystus Dobry Pasterz", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/chrzescijanstwo/dobry_pasterz.jpg", author: "Nieznany", description: "Sztuka wczesnochrześcijańska <br> Lokalizacja: Muzea Watykańskie" },
    { category: "Category 3", name: "Hagia Sophia", image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Hagia_Sophia_Mars_2013.jpg", author: "Anthemios z Tralles, Izydor z Miletu ", description: "Sztuka bizantyńska i bizantynizująca <br> Data powstania:VI w. n.e. <br> Lokalizacja: Turcja, Stambuł" },
    { category: "Category 3", name: "Cerkiew Wasyla Błażennego", image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Moscow_05-2012_StBasilCathedral.jpg", author: "Nieznany", description: "Sztuka bizantyńska i bizantynizująca <br> Data powstania: 1555-1561 rok n.e. <br> Lokalizacja: Rosja, Moskwa" },
    { category: "Category 3", name: "Bazylika św. Marka w Wenecji", image: "https://1000krokow.pl/wp-content/uploads/2018/07/Bazylika_sw_Marka-e1532871429834.jpg", author: "Nieznany", description: "Sztuka bizantyńska i bizantynizująca <br> Data powstania: IX wiek n.e. <br> Lokalizacja: Włochy, Wenecja" },
    { category: "Category 3", name: "Ikona z przedstawieniem Matki Boskiej Częstochowskiej z Jasnej Góry", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/bizancjum/matka_boska_czestochowska.jpg", author: "Nieznany", description: "Sztuka bizantyńska i bizantynizująca " },
    { category: "Category 3", name: "Kaplica pałacowa w Akwizgranie", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Aachen_Germany_Imperial-Cathedral-01.jpg/1200px-Aachen_Germany_Imperial-Cathedral-01.jpg", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: 786-800 rok n.e. <br> Lokalizacja: Niemcy, Akwizgran" },
    { category: "Category 3", name: "Kościół św. Michała w Hildesheim", image: "https://upload.wikimedia.org/wikipedia/commons/0/03/St_Michaels_Church_Hildesheim.jpg", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: XI wiek n.e. <br> Lokalizacja: Niemcy, Hildesheim" },
    { category: "Category 3", name: "Opactwo i klasztor Altenmünster w Lorsch", image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Kloster_Lorsch_04.jpg", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: 764 rok n.e. <br> Lokalizacja: Niemcy, Lorsch" },
    { category: "Category 3", name: "Oratorium w Germigny-des-Prés", image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Germigny_Des_Pres_2007_02.jpg", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: 806 rok n.e. <br> Lokalizacja: Francja, Germigny-des-Prés" },
    { category: "Category 3", name: "Opactwo Corvey", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Corvey_Anlage_vom_Torhaus.jpg/1200px-Corvey_Anlage_vom_Torhaus.jpg", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: 822 rok n.e. <br> Lokalizacja: Niemcy" },
    { category: "Category 3", name: "Katedra w Spirze", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/romanizm/katedra_w_spirze.jpg", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: 1061 rok n.e. <br> Lokalizacja: Niemcy, Spira" },
    { category: "Category 3", name: "Kościół św. Cyriaka w Gernrode", image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Gernrode_-_Romanische_Stiftskirche_St._Cyriacus.jpg", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: 960 rok n.e. <br> Lokalizacja: Niemcy, Gernrode" },
    { category: "Category 3", name: "Księga z Kells", image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/KellsFol032vChristEnthroned.jpg", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: 800 rok n.e. <br> Lokalizacja: Biblioteka Trinity College w Dublinie" },
    { category: "Category 3", name: "Minuskuła karolińska", image: "https://static.prsa.pl/images/6a5a74cf-180d-4298-bbd6-af89a7dfbf3e.jpg", author: " - ", description: "Sztuka karolińska" },
    { category: "Category 3", name: "Drzwi Bernwarda", image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Bernwardst%C3%BCr.jpg", author: "Nieznany", description: "Sztuka ottońska <br> Data powstania: 1015 rok n.e. <br> Lokalizacja: Niemcy, Hildesheim" },
    { category: "Category 3", name: "Madonna z Essen", image: "https://www.historiasztuki.com.pl/ilustracje/RZEZBA/xPREROMANIZM-Madonna-Essen.jpg.pagespeed.ic.7sNA0XX36-.webp", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: 980 rok n.e. <br> Lokalizacja: katedra w Essen" },
    { category: "Category 3", name: "Gero Crucifix", image: "https://www.historiasztuki.com.pl/ilustracje/RZEZBA/xPREROM-Gero.jpg.pagespeed.ic.ZybyUxcB63.webp", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: 965-970 rok n.e. <br> Lokalizacja: Katedra w Kolonii" },
    { category: "Category 3", name: "Krzyż Lotara i detal przedstawiający cesarza Augusta", image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lotharkreuz%2C_Kaiserseite%2C_Aachener_Dom%2C_Juni_2008.jpg", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: 1000 rok n.e. <br> Lokalizacja: Znajduje się w skarbcu katedry w Akwizgranie." },
    { category: "Category 3", name: "Samobójstwo Judasza", image: "https://www.historiasztuki.com.pl/ilustracje/RZEZBA/xROMANIZM-Autun_Cathedrale_Judas.jpg.pagespeed.ic.SW6qb3d-s5.webp", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: 1130 rok n.e. <br> Lokalizacja: Kapitel z katedry Saint-Lazare d'Autun" },
    { category: "Category 3", name: "Trzej Królowie", image: "https://www.historiasztuki.com.pl/ilustracje/RZEZBA/xROMAN-KAP-Autun-3K2.jpg.pagespeed.ic.zSYgfddwBw.webp", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: 1130 rok n.e. <br> Lokalizacja: Kapitel z katedry Saint-Lazare d'Autun" },
    { category: "Category 3", name: "Tympanon portalu katedry w Vezelay", image: "https://www.historiasztuki.com.pl/ilustracje/RZEZBA/xROMANIZM-Vezelay.jpg.pagespeed.ic.cTpxqhA2MH.webp", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: 1130 rok n.e. <br> Lokalizacja: katedra w Vezelay" },
    { category: "Category 3", name: "Kościół Cluny III", image: "http://www.zsplast.gdynia.pl/historia_sztuki/kanon_dziel_obrazy/romanizm/cluny_III%20(widokogolny).JPG", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: X wiek n.e. <br> Lokalizacja: Francja, Cluny" },
    { category: "Category 3", name: "Opactwo Sankt Gallen", image: "https://upload.wikimedia.org/wikipedia/commons/2/21/StGallen_asv2022-10_F%C3%BCrstabtei_img1.jpg", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Lokalizacja: Szwajcaria" },
    { category: "Category 3", name: "Katedra w Wormacji", image: "https://navtur.pl/files/plc_pano/2950.jpg", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: XII wiek n.e. <br> Lokalizacja: Niemcy, Wormacja" },
    { category: "Category 3", name: "Katedra w Moguncji", image: "https://i1.wp.com/zlamusa.pl/wp-content/uploads/2020/12/2014-1-Moguncja-Katedra-fasada-wschodnia-blog.jpg", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: XI wiek n.e. <br> Lokalizacja: Niemcy, Moguncja" },
    { category: "Category 3", name: "Katedra Świętego Piotra w Trewirze", image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Trier_BW_2013-04-14_15-59-54.JPG", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: 310-320 rok n.e. <br> Lokalizacja: Niemcy, Trewir" },
    { category: "Category 3", name: "Katedra w Poitiers", image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Poitiers%2C_Cath%C3%A9drale_S._Pierre.jpg", author: "Nieznany", description: "Sztuka przedromańska i romańska <br> Data powstania: 1379 rok n.e. <br> Lokalizacja: Francja, Poitiers" },


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