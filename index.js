let tab = document.querySelectorAll(".tab");
let content = document.querySelector(".content");
let img = document.querySelector(".img");

tab[0].addEventListener("click", function() {

    tab[0].classList.add("active");
    tab[1].classList.remove("active");
    tab[2].classList.remove("active");

    content.innerHTML = `
    <div class="content">
        <p>Rohit Gurunath Sharma (born 30 April 1987), is an Indian international cricketer and the current captain of India mens cricket team in all formats. Considered one of the best batsmen of his generation and one of greatest opening batters of all time, Sharma is known for his timing, elegance, six-hitting abilities and leadership skills. He plays as a right-handed batsman for India national cricket team in international cricket, Mumbai Indians in IPL and for Mumbai in domestic cricket. Rohit also captains Mumbai Indians and the team has won 5 titles under his leadership. With India, Sharma was a member of the team that won the 2007 T20 World Cup, and the 2013 ICC Champions Trophy, where he played in the finals of both tournaments.</p>
    </div>`
    img.style.backgroundImage = "url('https://w0.peakpx.com/wallpaper/554/757/HD-wallpaper-hitman-sharma-indian-cricket-rohit-sharma.jpg')"
    img.style.transitionDuration = "3s";
    img.stly.transitionTimingFunction = "ease-in-out";
});

tab[1].addEventListener("click", function() {

    tab[0].classList.remove("active");
    tab[1].classList.add("active");
    tab[2].classList.remove("active");

    content.innerHTML = `
    <div class="content">
        <p>Virat Kohli ( born 5 November 1988) is an Indian international cricketer and the former captain of the Indian national cricket team who plays for Royal Challengers Bangalore in the IPL and Delhi in domestic cricket. Considered to be one of the best cricketers in the world, he is widely regarded as one of the greatest batsmen in the history of the sport. Nicknamed "The King", due to his dominant style of play and popularity, Kohli holds numerous records in his career across all formats. In 2020, the International Cricket Council named him the male cricketer of the decade. Kohli has also contributed to India's successes, captaining the team from 2014 to 2022, and winning the 2011 World Cup and the 2013 Champions trophy. He is among the only four Indian cricketers who have played over 500 matches for India.</p>
    </div>`;
    img.style.backgroundImage = "url('https://w0.peakpx.com/wallpaper/788/286/HD-wallpaper-virat-kohli-cricket-indian-virat-kohli.jpg')"
    img.style.transitionDuration = "3s";
    img.stly.transitionTimingFunction = "ease-in-out";
});
tab[2].addEventListener("click", function() {

    tab[0].classList.remove("active");
    tab[1].classList.remove("active");
    tab[2].classList.add("active");

    content.innerHTML = `
    <div class="content">
        <p>Mahendra Singh Dhoni ( born 7 July 1981) is an Indian professional cricketer, who plays as a wicket-keeper-batsman. He was the captain of the Indian national team in limited-overs formats from 2007 to 2017 and in Test cricket from 2008 to 2014. He plays for and captains Chennai Super Kings franchise in the Indian Premier League.
        Born in Ranchi, Bihar (now in Jharkhand), His exceptional wicketkeeping skills allowed him to become the regular wicketkeeper at the Commando Cricket Club (1995–1998), he was picked for the 1997/98 season Vinoo Mankad Trophy Under-16 Championship, where he performed well. From 2001 to 2003, He worked as a Travelling Ticket Examiner at Kharagpur railway station under South Eastern Railway in Midnapore, in West Bengal. In Indian domestic cricket he played for Bihar and then for Jharkhand Cricket team. Dhoni's performance in the 2002– 03 season included three half-centuries in the Ranji Trophy and a couple of half-centuries in the Deodhar Trophy, as he started gaining recognition for his lower-order contribution as well as hard-hitting batting style </p>
        
    </div>`
    img.style.backgroundImage = "url('https://w0.peakpx.com/wallpaper/318/59/HD-wallpaper-ms-dhoni-cricket-dhoni-msd.jpg')";
    img.style.transitionDuration = "3s";
    img.stly.transitionTimingFunction = "ease-in-out";
});