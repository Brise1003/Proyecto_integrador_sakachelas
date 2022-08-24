class Main {
    String[] newsTitles ={
        "China usar[a energ[ia renovable", 
        "La economía de USA continúa creciendo", 
        "Hackers roban 1 millón de BTC.",
        "Nueva batería eléctrica dura más", 
        "Aprende a programar haciéndolo" 
    };

    String countryNews = "";

    static void loopTitulos(String regex) {
        for(int i = 0; i < newsTitles.length(); i++){
            if(newsTitles[i].contains(regex)) {
                countryNews = newsTitles[i];
                break;
            }
        }
    }

    for(int i = 0; i < newsTitles.longitud; i++) {
        System.out.println("Noticias" + {i + 1 + ":" + newsTitles[i]});
    }

    loopTitulos("USA");
    System.out.println("USA News: " + countryNews);

    loopTitulos("China");
    System.out.println("China News: " + countryNews);
}