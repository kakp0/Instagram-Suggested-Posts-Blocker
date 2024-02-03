// gets all posts on your page from people you dont follow
const removeElements = () => {
  const targetDivs = document.querySelectorAll(".x1i10hfl.xjqpnuy.xa49m3k.xqeqjp1.x2hbi6w.xdl72j9.x2lah0s.xe8uvvx.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.x2lwn1j.xeuugli.x1hl2dhg.xggy1nq.x1ja2u2z.x1t137rt.x1q0g3np.x1lku1pv.x1a2a7pz.x6s0dn4.xjyslct.x1ejq31n.xd10rxx.x1sy0etr.x17r0tee.x9f619.x1ypdohk.x1f6kntn.xwhw2v2.xl56j7k.x17ydfre.x2b8uid.xlyipyv.x87ps6o.x14atkfc.xcdnw81.x1i0vuye.xjbqb8w.xm3z3ea.x1x8b98j.x131883w.x16mih1h.x972fbf.xcfux6l.x1qhh985.xm0m39n.xt0psk2.xt7dq6l.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1n2onr6.x1n5bzlp.x173jzuc.x1yc6y37");

  targetDivs.forEach((targetDiv) => {
    // 3pic 1337 coding skill to get given posts 7th parent element
    const parentElement = targetDiv.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    if (parentElement) {
      parentElement.remove();
    }
  });
};

//mutation observer initilisation to run code each time something happens on the page to keep them out for good
const observer = new MutationObserver(removeElements);
const observerOptions = { childList: true, subtree: true };
observer.observe(document, observerOptions);

removeElements();
