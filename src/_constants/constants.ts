export const BASE_URL = "https://startup-summer-2023-proxy.onrender.com";

export const AUTH_URL =
  "/2.0/oauth2/password/?login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948&hr=0";

export const configAuth = {
  headers: {
    "x-secret-key": "GEU4nvd3rej*jeh.eqp",
    "x-api-app-id":
      "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
  },
};

export const VACANCIES_URL = "/2.0/vacancies/?published=1&page=0&count=4/";

export const CATALOGUES_URL = "/2.0/catalogues/";

export const PAGE_SIZE = 4;

export const NavLinksData = [
  { path: "/", label: "Поиск Вакансий", key: 1 },
  { path: "/saved", label: "Избранное", key: 2 },
];

export const headers = {
  "x-secret-key": "GEU4nvd3rej*jeh.eqp",
  "x-api-app-id":
    "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};
