let listFilm = [{
    title: "Rồi Mùa Yêu Thương Dần Đang Đến ♫ Sao Mình Chưa Nắm Tay Nhau Lofi - Tuyển Tập Nhạc Lofi Hay Nhất",
    data_url: "https://www.youtube.com/embed/kKchvizII94?si=mVRmsz1NBN2CmaEV",
    image: "https://img.youtube.com/vi/kKchvizII94/maxresdefault.jpg"
},{
    title: "Rồi Mùa Yêu Thương Dần Đang Đến ♫ Sao Mình Chưa Nắm Tay Nhau Lofi - Tuyển Tập Nhạc Lofi Hay Nhất",
    data_url: "https://www.youtube.com/embed/CSbTdUfWYu4?si=t_E7lI7na2Fbn39U",
    image: "https://img.youtube.com/vi/CSbTdUfWYu4/maxresdefault.jpg"
},{
    title: "Rồi Mùa Yêu Thương Dần Đang Đến ♫ Sao Mình Chưa Nắm Tay Nhau Lofi - Tuyển Tập Nhạc Lofi Hay Nhất",
    data_url: "https://www.youtube.com/embed/hwDKX6CQ0Vw?si=mNtDekHLls8bKEqu",
    image: "https://img.youtube.com/vi/hwDKX6CQ0Vw/maxresdefault.jpg"
},{
    title: "Rồi Mùa Yêu Thương Dần Đang Đến ♫ Sao Mình Chưa Nắm Tay Nhau Lofi - Tuyển Tập Nhạc Lofi Hay Nhất",
    data_url: "https://www.youtube.com/embed/kKchvizII94?si=mVRmsz1NBN2CmaEV",
    image: "https://img.youtube.com/vi/kKchvizII94/maxresdefault.jpg"
},{
    title: "Rồi Mùa Yêu Thương Dần Đang Đến ♫ Sao Mình Chưa Nắm Tay Nhau Lofi - Tuyển Tập Nhạc Lofi Hay Nhất",
    data_url: "https://www.youtube.com/embed/kKchvizII94?si=mVRmsz1NBN2CmaEV",
    image: "https://img.youtube.com/vi/kKchvizII94/maxresdefault.jpg"
},{
    title: "Rồi Mùa Yêu Thương Dần Đang Đến ♫ Sao Mình Chưa Nắm Tay Nhau Lofi - Tuyển Tập Nhạc Lofi Hay Nhất",
    data_url: "https://www.youtube.com/embed/kKchvizII94?si=mVRmsz1NBN2CmaEV",
    image: "https://img.youtube.com/vi/kKchvizII94/maxresdefault.jpg"
},{
    title: "Rồi Mùa Yêu Thương Dần Đang Đến ♫ Sao Mình Chưa Nắm Tay Nhau Lofi - Tuyển Tập Nhạc Lofi Hay Nhất",
    data_url: "https://www.youtube.com/embed/kKchvizII94?si=mVRmsz1NBN2CmaEV",
    image: "https://img.youtube.com/vi/kKchvizII94/maxresdefault.jpg"
}
]

let video = document.querySelectorAll('.videoLink');
let bannerIframe = document.getElementById('banner--iframe');
let imgBanner = document.getElementById('banner--img');
let wrapperBanner = document.getElementById('wrapper--banner');
let titleHeader = document.getElementById('title_header');
let viewCount = document.getElementById('view-count');
let titleVideo = document.getElementById('title_video');


document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector('.drop-down');
    const subnav = document.getElementById('header__icon--subnav');
    const subnavLinks = subnav.querySelectorAll("a");

    let currentIndex = 0;
    let viewCounts = Array(listFilm.length).fill(0);

    function initBanner() {
        imgBanner.src = listFilm[currentIndex].image; // Đặt ảnh đầu tiên
        bannerIframe.style.display = 'none'; // Ẩn iframe video
        wrapperBanner.style.display = 'none'; // Ẩn wrapper của iframe
        imgBanner.style.display = 'block'; // Hiển thị ảnh
        titleHeader.textContent = listFilm[currentIndex].title; // Đặt tiêu đề
        viewCount.textContent = `Views: ${viewCounts[currentIndex]}`; // Hiển thị lượt xem
    }

    imgBanner.addEventListener('click', () => {

        imgBanner.style.display = 'none'; // Ẩn ảnh
        wrapperBanner.style.display = 'block'; // Hiển thị wrapper của video
        bannerIframe.src = listFilm[currentIndex].data_url; // Đặt URL video cho iframe
        bannerIframe.style.display = 'block'; // Hiển thị iframe video
    
        // Cập nhật lượt xem
        viewCounts[currentIndex]++;
        viewCount.textContent = `Views: ${viewCounts[currentIndex]}`;
    });

    imgBanner.addEventListener("mouseenter", () => {
        titleVideo.style.display = "block"; // Hiển thị title_video sau 2s
    });
    wrapperBanner.addEventListener("mouseenter", () =>{
        titleVideo.style.display = "block";
    });

    [imgBanner, titleVideo, wrapperBanner].forEach((el) =>
        el.addEventListener("mouseleave", (event) => {
            if (!imgBanner.contains(event.relatedTarget) && !titleVideo.contains(event.relatedTarget) && !titleVideo.contains(event.relatedTarget)) {
                titleVideo.style.display = "none";
            }
        })
    );


    video.forEach((element, index) => {
        if (listFilm[index]) {
            element.querySelector('img').src = listFilm[index].image;
        }

        element.addEventListener('click', (e) =>{
            e.preventDefault();
            
            currentIndex = index;

            imgBanner.src = listFilm[currentIndex].image;
            bannerIframe.style.display = 'none';
            wrapperBanner.style.display = 'none';
            imgBanner.style.display = 'block';
            titleHeader.textContent = listFilm[currentIndex].title;
            viewCount.textContent = `View ${viewCounts[currentIndex]}`;
        })

        initBanner();
    });


    // Toggle subnav visibility
    toggleBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Ngăn chặn hành động mặc định
        subnav.classList.toggle("show");
    });

    // Hide subnav when clicking on links
    subnavLinks.forEach(link => {
        link.addEventListener("click", () => {
            subnav.classList.remove("show");
        });
    });

    // Hide subnav when clicking outside
    document.addEventListener("click", (event) => {
        if (!subnav.contains(event.target) && !toggleBtn.contains(event.target)) {
            subnav.classList.remove("show");
        }
    });
});

function modeBtn() {
    const bodyMain = document.body;
    const menuLinks = document.querySelectorAll('.menu__link');
    const allSvgs = document.querySelectorAll('svg');
    const titleContent = document.querySelectorAll('.tieu-de');

    const currentColor = getComputedStyle(bodyMain).backgroundColor;

    if (currentColor === "rgb(0, 0, 0)") { // mau den
        bodyMain.style.backgroundColor = "rgb(255, 255, 255)";

        menuLinks.forEach(link => link.style.color = "black");
        allSvgs.forEach(svg => {
            let pathSvg = svg.querySelector('path');
            pathSvg.style.fill = "black";
        });
        titleContent.forEach(title => title.style.color = "black");
    } else {
        bodyMain.style.backgroundColor = "rgb(0, 0, 0)";

        menuLinks.forEach(link => link.style.color = "white");
        allSvgs.forEach(svg => {
            let pathSvg = svg.querySelector('path');
            pathSvg.style.fill = "white";
        });
        titleContent.forEach(title => title.style.color = "white");
    }
}

