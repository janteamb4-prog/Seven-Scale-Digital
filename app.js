(function () {
  const resorts = [
    {
      id: 'la-vie',
      name: 'La Vie Adventure Trails',
      location: 'Nueva Ecija–Aurora Road',
      type: ['cabin', 'family', 'daytour'],
      capacity: 99,
      price: null,
      priceLabel: 'Check live rate',
      badge: 'Adventure resort',
      rating: '8.4',
      ratingLabel: '33 public reviews',
      description: 'Nature-focused resort with pool, restaurant, cabins, and outdoor activities.',
      amenities: ['Swimming pool', 'Restaurant', 'Pet-friendly'],
      image: 'https://aw-d.tripcdn.com/images/1mc6412000baccxufAF48.jpg',
      imageAlt: 'A-frame cabins at La Vie Adventure Trails',
      source: 'https://www.trip.com/hotels/bongabon-hotel-detail-78108650/la-vie-adventure-trails/',
      sourceLabel: 'View public listing'
    },
    {
      id: 'casa-bella',
      name: 'Casa Bella Bongabon',
      location: 'Bongabon farmland area',
      type: ['private', 'family'],
      capacity: 14,
      price: null,
      priceLabel: 'Check live rate',
      badge: 'Guest favorite',
      rating: '4.9',
      ratingLabel: '62 public reviews',
      description: 'Private villa for big groups with two bedrooms, a private pool, kitchen, and fast Wi-Fi.',
      amenities: ['Private pool', '14 guests', 'Fast Wi-Fi'],
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODQ1OTE3MTMzMzU1OTEzODk5/original/5bfe3d65-4ba0-4a26-9c53-c19063afff42.jpeg',
      imageAlt: 'Private pool and villa at Casa Bella Bongabon',
      source: 'https://www.airbnb.com/rooms/845917133355913899',
      sourceLabel: 'View Airbnb listing'
    },
    {
      id: 'lasierra',
      name: 'LaSierra Private Resort',
      location: 'Labi, Bongabon',
      type: ['private', 'family'],
      capacity: 99,
      price: 3900,
      priceLabel: '₱3,900',
      badge: 'Private resort',
      rating: null,
      ratingLabel: null,
      description: 'Exclusive mountain-view stay with adult and kiddie pools, rooms, and group spaces.',
      amenities: ['Private pool', 'Mountain view', 'Group stay'],
      image: 'https://cdns.app/wgsdkw2F/assets/image/big/7030082780ea3e0129298bbeb33ed823_1652310830.jpg',
      imageAlt: 'Illuminated pool and cottages at LaSierra Private Resort',
      source: 'https://www.facebook.com/LaSierraPrivateResort/',
      sourceLabel: 'View official page'
    },
    {
      id: 'mountain-cabin',
      name: 'Mountain Cabin Resort',
      location: 'Brgy. Labi, Bongabon',
      type: ['cabin', 'private', 'family'],
      capacity: 10,
      price: null,
      priceLabel: 'Check live rate',
      badge: 'Mountain cabin',
      rating: '4.0',
      ratingLabel: 'Host public rating',
      description: 'Wood cabin escape with a pool, kitchen, air-conditioning, parking, and private patio.',
      amenities: ['Up to 10 guests', 'Pool', 'Kitchen'],
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1294831198043979494/original/281492fe-2b91-4725-9cff-34f856e5bf4c.jpeg',
      imageAlt: 'Wooden Queen Cabin at Mountain Cabin Resort',
      source: 'https://www.airbnb.com/rooms/1294831198043979494',
      sourceLabel: 'View Airbnb listing'
    },
    {
      id: 'camila',
      name: 'Camila Farm Resort',
      location: 'Betania area, near Bongabon',
      type: ['cabin', 'private', 'family'],
      capacity: 6,
      price: 3000,
      priceLabel: '₱3,000',
      badge: 'Farm stay',
      rating: null,
      ratingLabel: null,
      description: 'A-frame cabins surrounded by rice fields, with mountain views and pool access.',
      amenities: ['2–6 guests', 'A-frame cabin', 'Pool'],
      image: 'https://ph.vacations/api/images/properties/d1892f5c382440690b2d43697a414df3_1693901030.jpg',
      imageAlt: 'A-frame cabins and pool at Camila Farm Resort',
      source: 'https://www.facebook.com/camilafarmresort/',
      sourceLabel: 'View official page'
    },
    {
      id: 'la-casa',
      name: "La Casa Prime Cabin's",
      location: 'Brgy. Curva, Bongabon',
      type: ['cabin', 'private', 'family', 'daytour'],
      capacity: 8,
      price: 5000,
      priceLabel: '₱5,000',
      badge: 'Bali-inspired',
      rating: null,
      ratingLabel: null,
      description: 'Bali-inspired cabins with pool, restaurant, and packages for couples, families, and barkada.',
      amenities: ['2–8 guests', 'Pool', 'Restaurant'],
      image: 'https://ph.vacations/api/images/properties/4b0753002a7364a51aa5730dcfded952_1743226332.jpg',
      imageAlt: "Poolside cabins at La Casa Prime Cabin's",
      source: 'https://www.facebook.com/Lacasaprimecabins/',
      sourceLabel: 'View official page'
    },
    {
      id: 'simple-life',
      name: 'Simple Life Private Resort',
      location: 'Bongabon, Nueva Ecija',
      type: ['private', 'family', 'daytour'],
      capacity: 99,
      price: null,
      priceLabel: 'Ask for current rate',
      badge: 'Private resort',
      rating: null,
      ratingLabel: null,
      description: 'A locally listed private resort in Bongabon for relaxed family and group getaways.',
      amenities: ['Private getaway', 'Family-friendly', 'Direct inquiry'],
      image: null,
      imageAlt: '',
      source: 'https://www.facebook.com/1042733422256918/',
      sourceLabel: 'View public page'
    },
    {
      id: 'kimkamhaze',
      name: 'KimKamHaze Hotel & Resort',
      location: 'Brgy. Tugatog, Bongabon',
      type: ['family', 'daytour', 'private'],
      capacity: 99,
      price: null,
      priceLabel: 'Ask for current rate',
      badge: 'Hotel & resort',
      rating: '4.0',
      ratingLabel: 'Public directory rating',
      description: 'Hotel-and-resort option along the Nueva Ecija–Aurora Road for stays, swimming, and group visits.',
      amenities: ['Hotel rooms', 'Swimming', 'Group visits'],
      image: null,
      imageAlt: '',
      source: 'https://www.facebook.com/p/Kimkamhaze-Hotel-Resort-100068535926962/',
      sourceLabel: 'View official page'
    },
    {
      id: 'villa-liza',
      name: 'Villa Liza Resort',
      location: 'Brgy. Calaanan, Bongabon',
      type: ['private', 'family', 'daytour'],
      capacity: 20,
      price: null,
      priceLabel: 'Public rates from ₱100',
      badge: 'Pool resort',
      rating: null,
      ratingLabel: null,
      description: 'A pool resort with day-tour and overnight options for couples, families, and groups.',
      amenities: ['Day tour', 'Overnight stay', 'Up to 20 guests'],
      image: 'https://cdns.app/wgsdkw2F/assets/image/properties/9f0f818098e06bf86dbf4c449977795a_1655282123.jpg',
      imageAlt: 'Blue swimming pool and cottages at Villa Liza Resort',
      source: 'https://ph.vacations/resorts/villa-liza-resort-62a99962c262da40bf3a8cf7',
      sourceLabel: 'View public listing'
    },
    {
      id: 'villa-miranda',
      name: 'Villa Miranda Event Place & Private Resort',
      location: 'Brgy. Magtanggol, Bongabon',
      type: ['private', 'family', 'daytour'],
      capacity: 99,
      price: null,
      priceLabel: 'Ask for current rate',
      badge: 'Events & stays',
      rating: null,
      ratingLabel: null,
      description: 'A private resort and event venue for celebrations, reunions, and group stays.',
      amenities: ['Event venue', 'Private booking', 'Group stays'],
      image: null,
      imageAlt: '',
      source: 'https://www.facebook.com/villamirandaeventsplace/',
      sourceLabel: 'View official page'
    },
    {
      id: 'm2000',
      name: 'M2000 Mountain Resort',
      location: 'Brgy. Labi, Bongabon',
      type: ['cabin', 'private', 'family'],
      capacity: 99,
      price: null,
      priceLabel: 'Ask for current rate',
      badge: 'Mountain resort',
      rating: null,
      ratingLabel: null,
      description: 'A mountain-side resort in Labi for nature breaks and group getaways.',
      amenities: ['Mountain setting', 'Family trips', 'Direct inquiry'],
      image: null,
      imageAlt: '',
      source: 'https://www.facebook.com/p/M2000-Mountain-Resort-61573863960612/',
      sourceLabel: 'View official page'
    },
    {
      id: 'sevilla-paradise',
      name: 'Sevilla Paradise',
      location: 'Camp Martyr, Brgy. Labi',
      type: ['family', 'private', 'daytour'],
      capacity: 99,
      price: null,
      priceLabel: 'Ask for current rate',
      badge: 'Nature resort',
      rating: null,
      ratingLabel: null,
      description: 'A nature-oriented Bongabon destination for family outings and group celebrations.',
      amenities: ['Nature setting', 'Day trips', 'Group visits'],
      image: null,
      imageAlt: '',
      source: 'https://www.facebook.com/SevillaParadiseN.E/',
      sourceLabel: 'View official page'
    },
    {
      id: 'kurbada-garden',
      name: 'Kurbada Garden Resort',
      location: 'Brgy. Labi, Bongabon',
      type: ['family', 'private', 'daytour'],
      capacity: 99,
      price: null,
      priceLabel: 'Ask for current rate',
      badge: 'Garden resort',
      rating: null,
      ratingLabel: null,
      description: 'A garden-style resort in Labi suited to casual family outings and group occasions.',
      amenities: ['Garden setting', 'Family trips', 'Group visits'],
      image: null,
      imageAlt: '',
      source: 'https://www.facebook.com/p/Kurbada-garden-100063939547654/',
      sourceLabel: 'View public page'
    },
    {
      id: 'vicentes-log-cabin',
      name: "Vicente's Log Cabin",
      location: 'Ariendo, Bongabon',
      type: ['cabin', 'private', 'family'],
      capacity: 99,
      price: null,
      priceLabel: 'Ask for current rate',
      badge: 'Private cabin',
      rating: null,
      ratingLabel: null,
      description: 'A private log-cabin venue with a kitchen and two bathrooms with hot-and-cold showers.',
      amenities: ['Private kitchen', 'Hot shower', 'Cabin stay'],
      image: null,
      imageAlt: '',
      source: 'https://venuekonnex.com/listing/vicentes-log-cabin/',
      sourceLabel: 'View public listing'
    },
    {
      id: 'rac-resort',
      name: 'RAC Resort',
      location: 'Brgy. San Roque, Bongabon',
      type: ['family', 'private', 'daytour'],
      capacity: 99,
      price: null,
      priceLabel: 'Ask for current rate',
      badge: 'Local resort',
      rating: null,
      ratingLabel: null,
      description: 'A local San Roque resort option for swimming, family time, and private gatherings.',
      amenities: ['Swimming', 'Family trips', 'Private events'],
      image: null,
      imageAlt: '',
      source: 'https://www.facebook.com/racresort/',
      sourceLabel: 'View official page'
    },
    {
      id: 'cj-waterpark',
      name: 'CJ Waterpark and Resort',
      location: 'Nueva Ecija–Aurora Road',
      type: ['family', 'daytour'],
      capacity: 99,
      price: null,
      priceLabel: 'Ask for current rate',
      badge: 'Waterpark',
      rating: null,
      ratingLabel: null,
      description: 'A roadside waterpark-and-resort listing for splash-filled day trips with family and friends.',
      amenities: ['Waterpark', 'Day tour', 'Family-friendly'],
      image: null,
      imageAlt: '',
      source: 'https://mapcarta.com/N5002517723',
      sourceLabel: 'View map listing'
    },
    {
      id: 'dianas-resort',
      name: "Diana's Resort",
      location: 'Brgy. Rizal, Bongabon',
      type: ['private', 'family', 'daytour'],
      capacity: 99,
      price: null,
      priceLabel: 'Ask for current rate',
      badge: 'Events resort',
      rating: null,
      ratingLabel: null,
      description: 'A resort and celebration venue for birthdays, weddings, reunions, and family gatherings.',
      amenities: ['Events', 'Swimming', 'Group gatherings'],
      image: null,
      imageAlt: '',
      source: 'https://www.facebook.com/Dianaaaasresort/',
      sourceLabel: 'View official page'
    },
    {
      id: 'blue-mountain',
      name: 'Blue Mountain Resort Aurora',
      location: 'Brgy. Labi, Bongabon',
      type: ['cabin', 'family', 'daytour'],
      capacity: 99,
      price: null,
      priceLabel: 'Ask for current rate',
      badge: 'Mountain escape',
      rating: null,
      ratingLabel: null,
      description: 'A mountain-area resort along the Bongabon–Aurora route for scenic family and group trips.',
      amenities: ['Mountain setting', 'Scenic trip', 'Group visits'],
      image: null,
      imageAlt: '',
      source: 'https://www.facebook.com/BlueMountainsAurora/',
      sourceLabel: 'View official page'
    },
    {
      id: 'centre-parc',
      name: 'Centre Parc Resort Hotel & Restaurant',
      location: 'Camp Martyr, Brgy. Labi',
      type: ['family', 'daytour'],
      capacity: 99,
      price: null,
      priceLabel: 'Ask for current rate',
      badge: 'Hotel & restaurant',
      rating: '4.5',
      ratingLabel: 'Public directory rating',
      description: 'A hotel, restaurant, and resort stop in the Camp Martyr area of Bongabon.',
      amenities: ['Hotel', 'Restaurant', 'Resort stay'],
      image: null,
      imageAlt: '',
      source: 'https://www.facebook.com/centre.parc.resorts/',
      sourceLabel: 'View official page'
    },
    {
      id: 'rainbow-forest',
      name: 'Rainbow Forest Resort',
      location: 'Brgy. Calaanan, Bongabon',
      type: ['cabin', 'family', 'daytour'],
      capacity: 99,
      price: null,
      priceLabel: 'Ask for current rate',
      badge: 'Forest resort',
      rating: null,
      ratingLabel: null,
      description: 'A forest-themed local resort in Calaanan for nature trips and family leisure.',
      amenities: ['Forest setting', 'Family trips', 'Local destination'],
      image: null,
      imageAlt: '',
      source: 'https://www.facebook.com/100064072387454/videos/a-taste-of-paradise-in-nueva-ecija-%EF%B8%8F-rainbow-forest-resortbongabon-nueva-ecija/1209216466586060/',
      sourceLabel: 'View public video'
    }
  ];

  const els = {
    grid: document.querySelector('#resort-grid'),
    empty: document.querySelector('#empty-state'),
    results: document.querySelector('#results-summary'),
    checkin: document.querySelector('#checkin'),
    checkout: document.querySelector('#checkout'),
    guests: document.querySelector('#guests'),
    budget: document.querySelector('#budget'),
    error: document.querySelector('#date-error'),
    search: document.querySelector('#search'),
    bookingDialog: document.querySelector('#booking-dialog'),
    requestsDialog: document.querySelector('#requests-dialog'),
    bookingStep: document.querySelector('#booking-form-step'),
    confirmationStep: document.querySelector('#confirmation-step'),
    toast: document.querySelector('#toast')
  };
  let activeFilter = 'all';
  let selectedResort = null;

  const peso = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 });
  const dateText = new Intl.DateTimeFormat('en-PH', { month: 'short', day: 'numeric', year: 'numeric' });

  function inputDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function readDate(value) {
    if (!value) return null;
    const [y, m, d] = value.split('-').map(Number);
    return new Date(y, m - 1, d);
  }

  function setDates() {
    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    const end = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 8);
    els.checkin.min = inputDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1));
    els.checkin.value = inputDate(start);
    els.checkout.min = inputDate(new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1));
    els.checkout.value = inputDate(end);
  }

  function validDates() {
    const start = readDate(els.checkin.value);
    const end = readDate(els.checkout.value);
    if (!start || !end || end <= start) {
      els.error.textContent = 'Choose a check-out date after your check-in date.';
      return false;
    }
    els.error.textContent = '';
    return true;
  }

  function cardTemplate(resort) {
    const rate = resort.price
      ? `<small>From</small><strong>${resort.priceLabel}</strong><em> / stay*</em>`
      : `<small>Rate</small><strong>${resort.priceLabel}</strong>`;
    const rating = resort.rating ? `<span class="rating" title="${resort.ratingLabel}">${resort.rating}</span>` : '';
    const initials = resort.name.split(/\s+/).filter(word => /^[A-Za-z0-9]/.test(word)).slice(0, 2).map(word => word[0]).join('').toUpperCase();
    const media = resort.image
      ? `<img src="${resort.image}" alt="${resort.imageAlt}" loading="lazy" referrerpolicy="no-referrer" data-initials="${initials}">`
      : `<div class="card-placeholder" aria-label="Photo coming soon"><strong>${initials}</strong><span>Photo coming soon</span></div>`;
    return `
      <article class="resort-card">
        <div class="card-image">
          ${media}
          <span class="card-badge">${resort.badge}</span>
          <span class="card-location">${resort.location}</span>
        </div>
        <div class="card-body">
          <div class="card-title-row"><h3>${resort.name}</h3>${rating}</div>
          <p class="card-description">${resort.description}</p>
          <div class="amenities">${resort.amenities.map(item => `<span>${item}</span>`).join('')}</div>
          <div class="card-footer">
            <div class="price">${rate}</div>
            <button class="book-button" type="button" data-book="${resort.id}">View & request</button>
          </div>
          <a class="source-link" href="${resort.source}" target="_blank" rel="noopener noreferrer">Source: ${resort.sourceLabel} ↗</a>
        </div>
      </article>`;
  }

  function filteredResorts() {
    const maxBudget = els.budget.value === 'all' ? Infinity : Number(els.budget.value);
    const guestCount = Number(els.guests.value);
    return resorts.filter(resort => {
      const typeMatch = activeFilter === 'all' || resort.type.includes(activeFilter);
      const budgetMatch = !resort.price || resort.price <= maxBudget;
      const guestMatch = resort.capacity >= guestCount;
      return typeMatch && budgetMatch && guestMatch;
    });
  }

  function renderResorts() {
    const list = filteredResorts();
    els.grid.innerHTML = list.map(cardTemplate).join('');
    els.grid.hidden = list.length === 0;
    els.empty.hidden = list.length !== 0;
    const guestCount = Number(els.guests.value);
    els.results.textContent = `${list.length} resort option${list.length === 1 ? '' : 's'} for ${guestCount} guest${guestCount === 1 ? '' : 's'}`;
    els.grid.querySelectorAll('[data-book]').forEach(button => {
      button.addEventListener('click', () => openBooking(button.dataset.book));
    });
    els.grid.querySelectorAll('img').forEach(image => {
      image.addEventListener('error', () => {
        const placeholder = document.createElement('div');
        placeholder.className = 'card-placeholder';
        placeholder.innerHTML = `<strong>${image.dataset.initials || '7S'}</strong><span>Photo coming soon</span>`;
        image.replaceWith(placeholder);
      }, { once: true });
    });
  }

  function nights() {
    return Math.max(1, Math.round((readDate(els.checkout.value) - readDate(els.checkin.value)) / 86400000));
  }

  function tripDates() {
    return `${dateText.format(readDate(els.checkin.value))} – ${dateText.format(readDate(els.checkout.value))}`;
  }

  function openBooking(id) {
    if (!validDates()) {
      els.search.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    selectedResort = resorts.find(resort => resort.id === id);
    const bookingImage = document.querySelector('#booking-image');
    bookingImage.hidden = !selectedResort.image;
    bookingImage.onerror = () => { bookingImage.hidden = true; };
    bookingImage.src = selectedResort.image || '';
    bookingImage.alt = selectedResort.imageAlt || '';
    document.querySelector('#booking-resort').textContent = selectedResort.name;
    document.querySelector('#booking-location').textContent = selectedResort.location;
    document.querySelector('#booking-dates').textContent = tripDates();
    document.querySelector('#booking-guests').textContent = `${els.guests.value} guest${Number(els.guests.value) === 1 ? '' : 's'}`;
    document.querySelector('#booking-rate').textContent = selectedResort.price
      ? `${peso.format(selectedResort.price * nights())} estimate*`
      : 'To be confirmed';
    els.bookingStep.hidden = false;
    els.confirmationStep.hidden = true;
    els.bookingDialog.showModal();
  }

  function getRequests() {
    try {
      return JSON.parse(localStorage.getItem('sevenscale-booking-requests') || localStorage.getItem('bongastay-requests') || '[]');
    } catch (error) {
      return [];
    }
  }

  function saveRequest(request) {
    const requests = getRequests();
    requests.unshift(request);
    localStorage.setItem('sevenscale-booking-requests', JSON.stringify(requests.slice(0, 12)));
    updateRequestCount();
  }

  function updateRequestCount() {
    document.querySelector('#request-count').textContent = getRequests().length;
  }

  function renderRequests() {
    const requests = getRequests();
    const list = document.querySelector('#requests-list');
    list.innerHTML = requests.length ? requests.map(request => `
      <article class="request-item">
        <div>
          <h3>${request.resort}</h3>
          <p>${request.dates} · ${request.guests} guest${request.guests === 1 ? '' : 's'}</p>
          <p>Ref. ${request.reference}</p>
        </div>
        <span class="request-status">For confirmation</span>
      </article>`).join('') : '<div class="requests-list-empty">You have no booking requests saved on this device.</div>';
  }

  let toastTimer;
  function showToast(message) {
    els.toast.textContent = message;
    els.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove('show'), 2600);
  }

  setDates();
  document.querySelector('#hero-count').textContent = resorts.length;
  renderResorts();
  updateRequestCount();

  els.search.addEventListener('submit', event => {
    event.preventDefault();
    if (!validDates()) return;
    renderResorts();
    document.querySelector('#resorts').scrollIntoView({ behavior: 'smooth' });
    showToast('Resort options updated for your search.');
  });

  els.checkin.addEventListener('change', () => {
    const start = readDate(els.checkin.value);
    if (start) {
      const nextDay = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1);
      els.checkout.min = inputDate(nextDay);
      if (!readDate(els.checkout.value) || readDate(els.checkout.value) <= start) els.checkout.value = inputDate(nextDay);
    }
    validDates();
  });
  els.checkout.addEventListener('change', validDates);
  els.guests.addEventListener('change', renderResorts);
  els.budget.addEventListener('change', renderResorts);

  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(item => item.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.dataset.filter;
      renderResorts();
    });
  });

  document.querySelector('#clear-filters').addEventListener('click', () => {
    activeFilter = 'all';
    els.budget.value = 'all';
    document.querySelectorAll('.chip').forEach(item => item.classList.toggle('active', item.dataset.filter === 'all'));
    renderResorts();
  });

  document.querySelector('#booking-form').addEventListener('submit', event => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity() || !selectedResort) return;
    const reference = `BNG-${String(Date.now()).slice(-6)}`;
    const form = new FormData(event.currentTarget);
    saveRequest({
      reference,
      resort: selectedResort.name,
      dates: tripDates(),
      guests: Number(els.guests.value),
      name: String(form.get('name') || ''),
      mobile: String(form.get('mobile') || ''),
      createdAt: new Date().toISOString()
    });
    document.querySelector('#reference-code').textContent = reference;
    els.bookingStep.hidden = true;
    els.confirmationStep.hidden = false;
    event.currentTarget.reset();
  });

  document.querySelector('#open-bookings').addEventListener('click', () => {
    renderRequests();
    els.requestsDialog.showModal();
  });

  document.querySelectorAll('[data-close]').forEach(button => {
    button.addEventListener('click', () => document.querySelector(`#${button.dataset.close}`).close());
  });

  [els.bookingDialog, els.requestsDialog].forEach(dialog => {
    dialog.addEventListener('click', event => {
      const box = dialog.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
    });
  });
})();
