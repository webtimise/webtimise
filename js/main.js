// All Animations
function init() {
	masterHeroReveal();
	// projectCardHover();
	// innerPageTitleReveal();
	// briefTextReveal();
	// yearReveal();
	// projectCardsReveal();
	// shortServicesReveal();
}

// Master Timeline
function masterHeroReveal() {
    const loader = loadingScreenReveal();
  const opener = transitionScreenReveal();
//	const hero = heroReveal();

	const masterTl = gsap.timeline();

	masterTl.add(loader);
	masterTl.add(opener);
//	masterTl.add(hero, "<6");

	return masterTl;
}

// Transition Screen
function transitionScreenReveal() {
    const $path = select(".path");
    const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
    const end =   "M 0 100 V 0 Q 50 0 100 0 V 100 z";
    
    const tl_Transition = gsap.timeline();
        tl_Transition.to($path, 0.8, {attr: { d: start }, ease: Power2.easeIn});
        tl_Transition.to($path, 0.4, {attr: { d: end }, ease: Power2.easeOut});
        tl_Transition.play(0);
    
    return tl_Transition;
}

// Loading Screen
function loadingScreenReveal() {    
    const loadingScreen = select(".loading-screen");
	const wtm = select("#load-wtm");
	const copyright = select("#load-copyright");
	const textRotator = selectAll(".text-rotater");
//	const bgRevealer = selectAll(".revealer");

    const path = select(".path");
    const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
    const end =   "M 0 100 V 0 Q 50 0 100 0 V 100 z";

	const skill1 = select("#skill-1");
	const skill2 = select("#skill-2");
	const skill3 = select("#skill-3");
	const skill4 = select("#skill-4");
	const skill5 = select("#skill-5");
	const skill6 = select("#skill-6");

	const skill1Split = new SplitText(skill1);
	const skill2Split = new SplitText(skill2);
	const skill3Split = new SplitText(skill3);
	const skill4Split = new SplitText(skill4);
	const skill5Split = new SplitText(skill5);
	const skill6Split = new SplitText(skill6);

	const wtmSplit = new SplitText(wtm);
	const copyrightSplit = new SplitText(copyright);

	gsap.set(textRotator, { display: "flex" });
	gsap.set(loadingScreen, { display: "flex", autoAlpha: 1 });
	gsap.set([skill1Split.chars, skill2Split.chars, skill3Split.chars, skill4Split.chars, skill5Split.chars, skill6Split.chars], {
		transformOrigin: "50% 50% -34",
	});

	const tl = gsap.timeline({ defaults: { duration: 1.34, ease: "myEaseSmooth" } });

	tl.from(wtmSplit.chars, { y: 34, stagger: 0.03 }, "<");
	tl.from(copyrightSplit.chars, { y: 34, stagger: 0.02 }, "<.1");

	tl.from(skill1Split.chars, { rotationX: -90, opacity: 0, duration: 0.99, stagger: 0.02 }, "<");
	tl.to(skill1Split.chars, { rotationX: 90, opacity: 0, duration: 0.99, stagger: 0.02 }, "<1");
	tl.from(skill2Split.chars, { rotationX: -90, opacity: 0, duration: 0.99, stagger: 0.02 }, "<");
	tl.to(skill2Split.chars, { rotationX: 90, opacity: 0, duration: 0.99, stagger: 0.02 }, "<1");
	tl.from(skill3Split.chars, { rotationX: -90, opacity: 0, duration: 0.99, stagger: 0.02 }, "<");
	tl.to(skill3Split.chars, { rotationX: 90, opacity: 0, duration: 0.99, stagger: 0.02 }, "<1");
	tl.from(skill4Split.chars, { rotationX: -90, opacity: 0, duration: 0.99, stagger: 0.02 }, "<");
	tl.to(skill4Split.chars, { rotationX: 90, opacity: 0, duration: 0.99, stagger: 0.02 }, "<1");
	tl.from(skill5Split.chars, { rotationX: -90, opacity: 0, duration: 0.99, stagger: 0.02 }, "<");
	tl.to(skill5Split.chars, { rotationX: 90, opacity: 0, duration: 0.99, stagger: 0.02 }, "<1");
	tl.from(skill6Split.chars, { rotationX: -90, opacity: 0, duration: 0.99, stagger: 0.02 }, "<");
	tl.to(skill6Split.chars, { rotationX: 90, opacity: 0, duration: 0.99, stagger: 0.02 }, "<1");

	tl.to(wtmSplit.chars, { y: -34, stagger: 0.02 }, "<");
    tl.to(copyrightSplit.chars, { y: -34, stagger: 0.01 }, "<");
/*    
    tl.to(path, {attr: { d: start }, duration: 0.8, ease: Power2.easeIn});
    tl.to(path, {attr: { d: end }, duration: 0.4, ease: Power2.easeOut});
*/
//    tl.to(loadingScreen, { display: "none", autoAlpha: 0 }, "<.5");

    //	tl.to(bgRevealer, { xPercent: 101, ease: Expo.easeInOut, stagger: 0.08 }, "<.3");

    /*
    tl.to(path, 0.8, {attr: { d: start }, ease: Power2.easeIn}, "<.5");
    tl.to(path, 0.4, {attr: { d: end }, ease: Power2.easeOut});
    */
//    tl.play(0);
/*        
    const tl_Transition = gsap.timeline();
        tl_Transition.to($path, 0.8, {attr: { d: start }, ease: Power2.easeIn});
        tl_Transition.to($path, 0.4, {attr: { d: end }, ease: Power2.easeOut});
        tl_Transition.play(0);
*/

	return tl;
}

// Main Page Animation
function heroReveal() {
	const mainPage = select(".main-container");

	const featuredImage = select("#featured-image");
	const heroImage = select("#hero-image");
	const heroImageAlt = select("#hero-image-replace");
	const imageOverlay = select("#overlay");
	const redBox = select("#red-box");
	const featuredText = select("#featured-text");
	const heroEmail = select("#hero-email");
	const siLogo = select("#si-logo");
	const menuText = select("#menu-text");
	const navLinksText = selectAll(".menu-list-text");
	const letsTalk = select("#lets-talk-text");
	const welcome = select("#welcome-text");
	const scrollDown = select("#scroll-down-text");
	const aboutLine = select(".hero-about-line");
	const behance = select("#behance-hero");
	const coordinates = select("#coords-hero");

	const menuTextSplit = new SplitText(menuText);
	const letsTalkSplit = new SplitText(letsTalk);
	const welcomeSplit = new SplitText(welcome);
	const scrollDownSplit = new SplitText(scrollDown);
	const featuredTextSplit = new SplitText(featuredText);
	const behanceSplit = new SplitText(behance);
	const coordinatesSplit = new SplitText(coordinates);

	const heroTitle = select("#hero-titles");
	const heroTitleSplit = new SplitText(heroTitle, { type: "lines", linesClass: "heroTitleChild" });
	new SplitText(heroTitle, { type: "lines", linesClass: "heroTitleParent" });

	const aboutTitle = selectAll(".about-title");
	const aboutTitleSplit = new SplitText(aboutTitle, { type: "lines", linesClass: "aboutTitleChild" });
	new SplitText(aboutTitle, { type: "lines", linesClass: "aboutTitleParent" });

	gsap.set(mainPage, { autoAlpha: 1 });

	const tl = gsap.timeline({ defaults: { duration: 1.34, ease: "myEaseSmooth" } });

	tl.from(featuredImage, { opacity: 0, scale: 1.5 }, "<1");
	tl.from(heroImage, { opacity: 0, scale: 1.5 }, "<");
	tl.from(heroImageAlt, { opacity: 0, scale: 1.5 }, "<");
	tl.from(imageOverlay, { opacity: 0, scale: 1.5 }, "<");
	tl.from(redBox, { xPercent: -101, ease: Expo.easeInOut }, "<.5");
	tl.from(featuredTextSplit.chars, { y: 34, stagger: 0.02 }, "<.1");
	tl.from(siLogo, { y: 89 }, "<");
	tl.from(menuTextSplit.chars, { y: 21, stagger: 0.03 }, "<.1");
	tl.from(navLinksText, { y: 55, stagger: 0.08 }, "<.2");
	tl.from(letsTalkSplit.chars, { y: 21, stagger: 0.02 }, "<.1");
	tl.from(welcomeSplit.chars, { y: 21, stagger: 0.02 }, "<.1");
	tl.from(scrollDownSplit.chars, { y: 21 }, "<.03");
	tl.from(heroTitleSplit.lines, { y: 144, stagger: 0.13 }, "<");
	tl.from(aboutTitleSplit.lines, { y: 144, stagger: 0.13 }, "<.03");
	tl.from(aboutLine, { xPercent: -101, ease: Expo.easeInOut }, "<.5");
	tl.from(behanceSplit.chars, { y: 21, stagger: 0.02 }, "<.3");
	tl.from(coordinatesSplit.chars, { y: 21, stagger: 0.02 }, "<.1");

	return tl;
}

// Projects Hover
function projectCardHover() {
	const projectCards = selectAll(".card-lists");

	projectCards.forEach((card) => {
		let title = card.querySelectorAll(".line-title");
		let titleSplit = new SplitText(title);

		card.addEventListener("mouseover", () => {
			gsap.to(titleSplit.chars, { yPercent: -101, duration: 0.89, stagger: 0.01, ease: "myEaseSmooth" });
		});

		card.addEventListener("mouseleave", () => {
			gsap.to(titleSplit.chars, { yPercent: 0, duration: 0.89, stagger: 0.01, ease: "myEaseSmooth" });
		});
	});
}

// Inner Page Titles Reveal
function innerPageTitleReveal() {
	const innerPageTitle = selectAll(".inner-page-titles");

	innerPageTitle.forEach((title) => {
		const number = title.querySelector(".section-number-text");
		const titleName = title.querySelector(".section-title-text");

		const numberSplit = new SplitText(number);
		const titleNameSplit = new SplitText(titleName);

		const tl = gsap.timeline({ id: "tl1", defaults: { duration: 1.34, ease: "myEaseSmooth" } });

		tl.from(numberSplit.chars, { y: 34, stagger: 0.03 });
		tl.from(titleNameSplit.chars, { y: 89, stagger: 0.03 }, "<");

		ScrollTrigger.create({ trigger: title, start: "top 100%", animation: tl });
	});
}

// Brief Text Reveal
function briefTextReveal() {
	const sectionBriefs = selectAll(".brief-wrap");

	sectionBriefs.forEach((brief) => {
		const siBrief = brief.querySelector(".brief-text");

		const siBriefSplit = new SplitText(siBrief, { type: "lines", linesClass: "siStudioBriefChild" });
		new SplitText(siBrief, { type: "lines", linesClass: "siStudioBriefParent" });

		const tl = gsap.timeline({ id: "tl1", defaults: { duration: 1.34, ease: "myEaseSmooth" } });

		tl.from(siBriefSplit.lines, { y: 89, stagger: 0.13 }, "<.3");

		ScrollTrigger.create({ trigger: brief, start: "top 100%", animation: tl });
	});
}

// Year Reveal
function yearReveal() {
	const yearInspirations = selectAll(".inspiration-year-wrap");

	yearInspirations.forEach((year) => {
		const yearNumber = year.querySelectorAll(".section-sub-titles");

		const yearNumberSplit = new SplitText(yearNumber);

		const tl = gsap.timeline({ id: "tl1", defaults: { duration: 1.34, ease: "myEaseSmooth" } });

		tl.from(yearNumberSplit.chars, { y: 34, stagger: 0.02 });

		ScrollTrigger.create({ trigger: year, start: "top 100%", animation: tl });
	});
}

// Project Cards Reveal
function projectCardsReveal() {
	const projectCard = selectAll(".card-lists");

	projectCard.forEach((card) => {
		const tl = gsap.timeline({ id: "tl1", defaults: { duration: 1.34, ease: Expo.easeInOut } });

		tl.from(card, { xPercent: -101 });

		ScrollTrigger.create({ trigger: card, start: "top 100%", animation: tl });
	});
}

// Short Serveices Reveal
function shortServicesReveal() {
	const services = select("#short-services");

	const servicesSplit = new SplitText(services, { type: "lines", linesClass: "servicesChild" });
	new SplitText(services, { type: "lines", linesClass: "servicesParent" });

	const tl = gsap.timeline({ id: "tl1", defaults: { duration: 1.34, ease: "myEaseSmooth" } });

	tl.from(servicesSplit.lines, { y: 89, stagger: 0.13 });

	ScrollTrigger.create({ trigger: services, start: "top 100%", animation: tl });
}

// On Window Load
window.addEventListener("load", () => {
	init();
});
