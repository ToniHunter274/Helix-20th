const parks = document.querySelector('#parks');
const freeplaces = document.querySelector('#freeplaces');
const walletvalue = document.querySelector('#walletvalue');
const currentpage = document.querySelector('#currentpage');
const lastpage = document.querySelector('#lastpage');

const parkingData = [
    {
        id: '121',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '122',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '123',
        cost: '1.540',
        status: 'selected',
    },
    {
        id: '124',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '125',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '126',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '127',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '128',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '129',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '130',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '131',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '132',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '133',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '134',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '135',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '136',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '137',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '138',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '139',
        cost: '1.540',
        status: 'selected',
    },
    {
        id: '140',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '141',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '142',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '143',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '144',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '145',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '146',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '147',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '148',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '149',
        cost: '1.540',
        status: 'selected',
    },
    {
        id: '150',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '151',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '152',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '153',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '154',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '155',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '156',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '157',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '158',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '159',
        cost: '1.540',
        status: 'selected',
    }
    ,
    {
        id: '160',
        cost: '1.540',
        status: 'occupied',
    },
    {
        id: '161',
        cost: '1.540',
        status: 'free',
    },
    {
        id: '162',
        cost: '1.540',
        status: 'selected',
    }
]

let max = 10;
let min = 0;

const pushParksData = ( data ) => {
    // PAGE FUNCTIONALITY
    let maxpage = Math.ceil( parkingData.length / 10 )
    let presentpage = Math.ceil(max / 10)
    parks.innerHTML = "";
    lastpage.textContent = maxpage;
    currentpage.textContent = presentpage;
    data.slice(min, max).map((item) => {
        const { id, cost, status } = item;
        // THE STYLING HERE RELIES DIRECTLY ON THE STATUS IN THE DATA

        parks.innerHTML += `
            <section class='park park${status}'>
                <p class="dash"></p>
                <div class="inner">
                    <p class="id"> ${id} </p>
                    <div>
                        <p class="white65 font600">${status}</p>
                        ${ status === 'occupied' ? `<div class="flexgapsmall font600"> <img src="/images/lock.svg" alt="lock" class="icons"> </div>` :
                        `<div class="flexgapsmall font600"> ${cost} <img src="/images/lix-yellow.svg" alt="lix-yellow" class="icons"> </div>
                        `}
                    </div>
                    ${status === 'selected' ? `<button> <img src="/images/long-arrow-left.svg" alt="arrow left"> BUY </button>` : '' }
                </div>
            </section>
        `
    })
}

const setWalletValue = (value) => {
    walletvalue.textContent = value;
}
const setFreePlaces = (value) => {
    freeplaces.textContent = value;
}
// IS THERE ANYTHING ELSE I SHOULD ADD TO THE KEYPRESS FUNCTIONS
document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape') {
        alert('Escape pressed');
    }
});

document.addEventListener('keydown', evt => {
    if (evt.key === 'q') {
        min -= 10;
        max -= 10;
        if ( min < 0 ){
            min += 10
            max += 10
            pushParksData(parkingData);
        }
        pushParksData(parkingData);
    }
});

document.addEventListener('keydown', evt => {
    if (evt.key === 'e') {
        min += 10 
        max += 10
        if ( min >= parkingData.length ){
            min -= 10
            max -= 10
            pushParksData(parkingData);
        }
        pushParksData(parkingData);
    }
});

pushParksData(parkingData);
setWalletValue('130.000');
setFreePlaces('832');