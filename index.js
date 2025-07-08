document.getElementById('home-link').addEventListener('click', function () {
        window.location.href = './index.html'; 
    });

document.addEventListener('DOMContentLoaded', function () {
  const homeBtn = document.querySelector('.home');
  const homeSection = document.querySelector('#home'); 

  if (homeBtn && homeSection) {
    homeBtn.addEventListener('click', () => {
      const headerOffset = 220; 
      const elementPosition = homeSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutNavItem = document.querySelector(".about");

  aboutNavItem.addEventListener("click", function () {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const skillsNavItem = document.querySelector(".skills");

  skillsNavItem.addEventListener("click", function () {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const experienceNavItem = document.querySelector(".experience");

  experienceNavItem.addEventListener("click", function () {
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const OFFSET = 220; 

  const smoothScroll = (selector, offset = 0) => {
    const target = document.querySelector(selector);
    if (!target) return;

    const top = target.offsetTop - offset;
    window.scrollTo({
      top: top,
      behavior: "smooth"
    });
  };

  
  document.querySelectorAll('a[href="#home"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      smoothScroll("#home", OFFSET);
    });
  });

 
  ["#about", "#skills", "#experience"].forEach(id => {
    document.querySelectorAll(`a[href="${id}"]`).forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const getInTouchFooter = document.getElementById("footer-get-in-touch");
  if (getInTouchFooter) {
    getInTouchFooter.addEventListener("click", function () {
      window.open("https://wa.me/918555843388", "_blank");
    });
  }

  const getInTouchHome = document.getElementById("home-get-in-touch");
  if (getInTouchHome) {
    getInTouchHome.addEventListener("click", function () {
      window.location.href = "mailto:soneeshchenduluruvenkat@gmail.com";
    });
  }
});




// for the push notification

window.addEventListener('load', () => {
  const width = window.innerWidth;
  const notification = document.createElement('div');
  notification.innerHTML = '🚀 This site took <strong>21 hrs, 41 min, and 17 sec</strong> to build!';

  Object.assign(notification.style, {
    position: width >= 376 && width <= 575 ? 'fixed' : 'absolute',
    background: 'linear-gradient(to right, #7f00ff, #e100ff)',
    color: 'white',
    padding: '12px 18px',
    borderRadius: '12px',
    fontFamily: 'Segoe UI, sans-serif',
    fontSize: '14px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    opacity: '0',
    transform: 'translateY(-10px)',
    transition: 'all 0.5s ease-out',
    zIndex: '1000'
  });

  if (width >= 376 && width <= 575) {
    // Small screen placement (top-right)
    notification.style.top = '170px';
    notification.style.right = '100px';
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateY(0)';
    }, 100);

    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(-10px)';
    }, 6500);
  } else {
    // Large screen placement (near profile image)
    const profileImage = document.querySelector('.image-icon');

    if (profileImage) {
      const rect = profileImage.getBoundingClientRect();

      setTimeout(() => {
        notification.style.top = `${window.scrollY + rect.top - 105}px`;
        notification.style.left = `${window.scrollX + rect.left}px`;
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';
      }, 100);

      document.body.appendChild(notification);

      setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateY(-10px)';
      }, 6500);
    }
  }
});
