class Parallax {
  constructor(obj) {
    this.cloud = document.querySelectorAll(obj.clouds);
    this.background = document.querySelector(obj.background);
    this.boat = document.querySelector(obj.boat);
    window.addEventListener("scroll", () => this.moveElements());
  }

  moveElements() {
    this.cloud.forEach((clouds) => {
      let speed = clouds.getAttribute("data-speed");
      clouds.style.transform = `translateX(${scrollY * speed}px) translateY(${
        scrollY * speed
      }px)`;
    });
    this.background.style.objectPosition = `0 ${scrollY / 10}%`;
    this.boat.style.transform = `translateX(${scrollY * 0.7}px) translateY(${
      scrollY / 8
    }px)`;
  }
}

const parallax = new Parallax({
  clouds: ".header__cloud",
  background: ".header__fan",
  boat: ".headr__boat",
});

// animate txt

// class Text {
//   constructor(title) {
//     this.text = document.querySelector(title);
//     this.fullText = this.text.innerHTML;
//     this.text.innerHTML = "";
//     this.str();
//     this.del();
//     this.reload();
//   }

//   str(x = 0) {
//     this.text.innerHTML += this.fullText[x];
//     x++;
//     if (x < this.fullText.length) {
//       setTimeout(() => {
//         this.str(x);
//       }, 300);
//     }
//   }
//   reload() {
//     let x = this.fullText.length
//     setTimeout(() => {
//       this.del(x)
//     }, x * 300 + 100)
//   }
//   del(x) {
//     x--;
//     this.text.innerHTML = this.fullText.slice(0, x);
//     if (x > 0) {
//       setTimeout(() => {
//         this.reload(x);
//       }, 300);
//     }
//   }
// }

class Text {
  constructor(title) {
    this.text = document.querySelector(title);
    this.fullText = this.text.innerHTML;
    this.text.innerHTML = "";
    this.str();
    this.strRemove();
  }

  str(x = 0) {
    this.text.innerHTML += this.fullText[x];
    x++;
    if (x < this.fullText.length) {
      setTimeout(() => {
        this.str(x);
      }, 300);
    } 
  }

  strRemove(x) {
    x = this.fullText.length;
    setTimeout(() => {
      this.deleteStr(x);
    }, 5000);
  }

  deleteStr(x) {
    x--;
    this.text.innerHTML = this.fullText.slice(0, x);
    if (x > 0) {
      setTimeout(() => {
        this.deleteStr(x);
      }, 300);
    } else {
      window.location.reload()

    }
  }
}

const text = new Text(".header__title");

// scroll
class Scroll {
  constructor(el) {
    this.section = document.querySelector(el);

    window.addEventListener("scroll", () => this.fadeRight(this.section));
  }

  fadeRight(section) {
    const fadeRight = section.querySelectorAll(".scroll__card");
    fadeRight.forEach((card) => {
      const speed = card.getAttribute("data-speed");
      card.style.transition = speed + "ms";

      if (scrollY >= section.offsetTop - section.offsetHeight * 1) {
        card.classList.add("active");
      } else {
        card.classList.remove("active");
      }
    });
  }
}

const scroll = new Scroll(".about");

class ParallaxMove {
  constructor(el) {
    this.moveSection = document.querySelector(el);
    this.moveEl = this.moveSection.querySelectorAll(".parallax__ball");
    this.moveSection.addEventListener("mousemove", (e) => this.moveItem(e));
  }
  moveItem(e) {
    this.moveEl.forEach((item) => {
      const speed = item.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 50;
      const y = (window.innerWidth - e.pageY * speed) / 50;
      item.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
}

const parallaxMove = new ParallaxMove(".parallax");
