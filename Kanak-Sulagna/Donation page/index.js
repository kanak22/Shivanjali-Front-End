let idSel = 1;
function tnClick(el) {
  let idClc = parseInt(el, 10);
  if(idSel != idClc) {
    newSel(idClc);
    clearGlass();
    transform(idClc);
    index = idSel;
  }
  return false;
}
function newSel(id) {
  document.getElementById(idSel.toString()).style.borderColor = '#fff9e5';
  idSel = id;
  document.getElementById(idSel.toString()).style.borderColor = 'yellow';
  setMainImg(idSel);
}
function setMainImg(id)
{
 // let image = document.getElementById('mnimg');
 // image.src = datas[id].photo;
  let ttl = document.getElementById('ttl');
  ttl.innerText = datas[id].title;
  let desc = document.getElementById('desc');
  desc.innerText = datas[id].desc;
}
let datas = [
  { photo: 'http://i.piccy.info/i9/94ae260190961fbbe3b61e9666ebdde9/1614105941/81129/1416938/p0.jpg',
    title: 'Vestrahorn mountains in stokksnes, iceland.',
    desc: 'Perhaps a re-engineering of your current world view will re-energize your online nomenclature to enable a new holistic interactive enterprise internet communication solution.'
  },
  { photo: 'http://i.piccy.info/i9/36cfe4fb80c56003e1e8f6240f799015/1614106130/78735/1416938/p1.jpg',
    title: 'Seljalandsfoss waterfall during the sunset, beautiful waterfall in iceland.',
    desc: 'Upscaling the resurgent networking exchange solutions, achieving a breakaway systemic electronic data interchange system synchronization, thereby exploiting technical environments for mission critical broad based  systems.'
  },
  { photo: 'http://i.piccy.info/i9/8a82c755341dd5c3a2407b8049f46747/1614106057/82893/1416938/p2.jpg',
    title: 'Cascade boat clean china natural rural',
    desc: 'Fundamentally transforming well designed actionable information whose semantic content is virtually null.'
  },
  { photo: 'http://i.piccy.info/i9/c81902eb6abfdd7794ecb48f1739c3a0/1614106170/63728/1416938/p3.jpg',
    title: 'Wide angle shot of a single tree growing under a clouded sky during a sunset surrounded by grass',
    desc: 'To more fully clarify the current exchange, a few aggregate issues will require addressing to facilitate this distributed communication venue.'
  },
  { photo: 'http://i.piccy.info/i9/b6d89059969f32d09561c328f9bf3358/1614106195/67863/1416938/77716p4.jpg',
    title: 'Pathway in the middle of the green leafed trees with the sun shining through the branches',
    desc: 'In integrating non-aligned structures into existing legacy systems, a holistic gateway blueprint is a backward compatible packaging tangible of immeasurable strategic value in right-sizing conceptual frameworks.'
  },
  { photo: 'http://i.piccy.info/i9/bcc794638486d370f2ee85b69d9cb83d/1614106235/29297/1416938/41211p5.jpg',
    title: 'Empty wooden dock in a lake during a breathtaking sunset- a cool background',
    desc: 'Implementing these goals requires a careful examination to encompass an increasing complex out sourcing disbursement to ensure the extant parameters are not exceeded while focusing on infrastructure cohesion.'
  },
  { photo: 'http://i.piccy.info/i9/71dacbdb7b9808bcecd25f6efdc55ae9/1614106278/69224/1416938/p6.jpg',
    title: 'Bukhansan mountains is covered by morning fog and sunrise in seoul,korea',
    desc: 'Dynamic demand forecasting indicates that a mainstream approach may establish a basis for leading-edge information processing to insure the diversity of granularity in encompassing expansion of content provided.'
  },
  { photo: 'http://i.piccy.info/i9/8d470647b5e11b9051f2b3e4e59bc519/1614106342/77076/1416938/9381p7.jpg',
    title: 'Aerial view of the beautiful and colorful landscape on the background of amazing mountains',
    desc: 'Empowerment in information design literacy demands the immediate and complete disregard of the entire contents of this cyberspace communication.'
  },
];
function leftMove() {
  if(idSel > 0) {
    document.getElementById(idSel.toString()).style.borderColor = '#fff9e5';
    idSel--;
    document.getElementById(idSel.toString()).style.borderColor = 'yellow';
  }
  else {
    document.getElementById('0').style.borderColor = '#fff9e5'
    idSel = 7;
    newSel(7);
  }
  clearGlass();
  transform((index = index > 0 ? --index : 7));
}
function rightMove() {
  if(idSel < 7) {
    document.getElementById(idSel.toString()).style.borderColor = '#fff9e5';
    idSel++;
    document.getElementById(idSel.toString()).style.borderColor = 'yellow';
  }
  else {
    document.getElementById('7').style.borderColor = '#fff9e5'
    idSel = 0;
    newSel(0);
  }
  clearGlass();
  transform((index = index < 7 ? ++index : 0));
}
function transform(index) {
  images.style.transform = `translateX(-${index * 100}%)`;
}
function clearGlass() {
  let ttl = document.getElementById('ttl');
  ttl.innerText = '';
  let desc = document.getElementById('desc');
  desc.innerText = '';
}

const images = document.querySelector(".images");
images.addEventListener('transitionend', function() {
  let ttl = document.getElementById('ttl');
  ttl.innerText = datas[idSel].title;
  let desc = document.getElementById('desc');
  desc.innerText = datas[idSel].desc;
});
let index = 0;
newSel(0);
