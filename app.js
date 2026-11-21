const rarities = [
  { id: "common", name: "Commune", rate: 55, icon: "✦", color: "var(--common)" },
  { id: "rare", name: "Rare", rate: 25, icon: "✧", color: "var(--rare)" },
  { id: "epic", name: "Épique", rate: 12, icon: "✴", color: "var(--epic)" },
  { id: "legendary", name: "Légendaire", rate: 6, icon: "❈", color: "var(--legendary)" },
  { id: "mythic", name: "Mythique", rate: 2, icon: "✹", color: "var(--mythic)" },
  { id: "silver", name: "Argent", rate: 0, icon: "✧", color: "var(--silver)" },
  { id: "gold", name: "Or", rate: 0, icon: "✹", color: "var(--gold-rarity)" }
];

// Kept only to migrate saved IDs created from the previous image filenames.
const legacyImageCardFiles = `
aaroniero-epic.png
abirama-epic.png
abirama-rare.png
aizen-common.png
aizen-epic.png
aizen-gold.png
aizenhogyo-mythic.png
aizen-legendary.png
aizen-mythic.png
aizen-rare.png
akon-epic.png
amagai-epic.png
ashido-epic.png
askin-legendary.png
askin-mythic.png
asnodt-mythic.png
bambietta-legendary.png
bambietta-mythic.png
bambiettazombie-legendary.png
barragan-epic.png
barragan-rare.png
bazz-legendary.png
byakuya_legendary.png
byakuya-common.png
byakuya-epic.png
byakuya-gold.png
byakuya-mythic.png
byakuya-rare.png
byakuya-silver.png
candice-legendary.png
candice-mythic.png
cangdu-legendary.png
chad-common.png
chad-epic.png
chad-gold.png
chad-legendary.png
chad-mythic.png
chad-rare.png
chad-silver.png
chuhlhourne-legendary.png
cirucci-epic.png
cirucci-legendary.png
dondochaka-common.png
don-gold.png
don-rare.png
dordoni-rare.png
dordonni-legendary.png
driscoll.png
ebern-legendary.png
edrad-epic.png
emilou-legendary.png
findorr.png
ganju-legendary.png
ganju-rare.png
ganryu-epic.png
gantenbaine-epic.png
ggio-epic.png
gin-common.png
gin-epic.png
gin-gold.png
gin-rare.png
ginrei-epic.png
gin-silver.png
giriko-epic.png
giriko-rare.png
giselle-legendary.png
giselle-mythic.png
gremmy-legendary.png
gremmy-mythic.png
grimmjow-common.png
grimmjow-epic.png
grimmjow-gold.png
grimmjow-legendary.png
grimmjow-rare.png
hachi-common.png
hachi-epic.png
hachi-gold.png
haineko-epic.png
hanataro-common.png
hanataro-gold.png
harribel-common.png
harribel-epic.png
harribel-gold.png
harribel-legendary.png
harribel-rare.png
hikifune-legendary.png
hisagomaru.png
hiyori-common.png
hiyori-epic.png
hiyori-rare.png
homura&shizuku-epic.png
hyorinmaru-epic.png
ichibe-legendary.png
ichibe-mythic.png
ichigo-common.png
ichigo-epic.png
ichigo-gold.png
ichigo-legendary.png
ichigo-mythic (2).png
ichigo-mythic (3).png
ichigo-mythic (4).png
ichigo-mythic.png
ichigo-rare.png
ichigo-silver.png
ichigoult-epic.png
ichigoult-mythic.png
ichigovastolorde-mythic.png
ikumi-common.png
illfort-epic.png
isane-common.png
isane-epic.png
ishin-common.png
ishin-epic.png
ishin-mythic.png
ishin-rare.png
izuru-gold.png
izuru-legendary.png
izuru-rare.png
izuru-silver.png
jackie-epic.png
jackie-gold.png
jackie-rare.png
jinta-common.png
jugram-legendary.png
jugram-mythic.png
kageroza-epic.png
kaien-epic.png
kaien-gold.png
kaien-silver.png
karin-epic.png
katenkyokotsu-epic.png
kazeshini.png
kempachi-legendary.png
kenpachi&yachiru-rare.png
kenpachi-common.png
kenpachi-epic.png
kenpachi-gold.png
kenpachi-mythic.png
kenpachi-silver.png
kensei-common.png
kensei-epic.png
kensei-gold.png
kensei-legendary.png
kensei-rare.png
kiyone&sentaro-epic.png
koga.png
kokuto-epic.png
komamura-epic.png
komamura-gold.png
komamura-legendary.png
komamura-rare.png
komamura-silver.png
kon-epic.png
kon-gold.png
kugo-common.png
kugo-epic.png
kugo-gold.png
kugo-rare.png
kukaku-common.png
kukkapuro-mythic.png
kusaka.png
lilinette-common.png
lilinette-gold.png
lilinette-rare.png
lillebarro-legendary.png
liltotto-mythic.png
lisa-epic.png
lisa-gold.png
lisa-rare.png
loly-rare.png
love-epic.png
love-gold.png
love-rare.png
luppi-epic.png
luppi-legendary.png
madarame-common.png
madarame-epic.png
madarame-gold.png
madarame-legendary.png
madarame-rare.png
madarame-silver.png
makoto-epic.png
masaki-legendary.png
mashiro-epic.png
mashiro-gold.png
mashiro-legendary.png
mashiro-rare.png
mask-legendary.png
mayuri-epic.png
mayuri-gold (2).png
mayuri-gold.png
mayuri-legendary.png
mayuri-mythic.png
mayuri-rare.png
mayuri-silver.png
meninas-legendary.png
meninas-mythic.png
milarose-legendary.png
momo-epic.png
momo-gold.png
momo-legendary.png
momo-rare.png
momo-silver.png
muramasa-epic.png
nanana-legendary.png
nanao-epic.png
nanao-legendary.png
nanao-mythic.png
nanao-rare.png
nelliel-common.png
nelliel-epic.png
nelliel-gold.png
nelliel-legendary.png
nelliel-rare.png
nemu-gold.png
nemu-legendary.png
nemu-mythic.png
nemu-rare.png
nirrge-epic.png
nnoitra-epic.png
nnoitra-gold.png
nnoitra-rare.png
nozomi-epic.png
oetsu-legendary.png
oetsu-mythic.png
oko-epic.png
omaeda-epic.png
omaeda-gold.png
orihime-common.png
orihime-epic.png
orihime-gold.png
orihime-legendary.png
orihime-mythic.png
orihime-rare.png
orihime-silver.png
pesche-common.png
quilge-legendary.png
rangiku-gold.png
rangiku-legendary.png
rangiku-rare.png
rangiku-silver.png
rangikuzombie-legendary.png
renji-common.png
renji-epic.png
renji-gold.png
renji-legendary.png
renji-mythic.png
renji-silver.png
rin.png
riruka-common.png
riruka-epic.png
riruka-legendary.png
riruka-rare.png
robert.png
rose-epic.png
rose-gold.png
rose-rare.png
rukia-common.png
rukia-epic.png
rukia-gold.png
rukia-legendary.png
rukia-mythic.png
rukia-rare.png
rukia-silver.png
rurichiyo.png
ryuken-epic.png
sasakibe-legendary.png
senbonzakura-epic.png
senjumaru-legendary.png
senjumaru-mythic.png
senna.png
shaolon-epic.png
shinji-common.png
shinji-epic.png
shinji-gold.png
shinji-legendary.png
shinji-rare.png
shinji-silver.png
shishigawara-epic.png
shishigawara-rare.png
shuei-common.png
shuei-epic.png
shuei-gold.png
shuei-legendary.png
shuei-rare.png
shuhei-silver.png
shunsui-common.png
shunsui-epic.png
shunsui-gold.png
shunsui-legendary.png
shunsui-mythic.png
shunsui-rare.png
shunsui-silver.png
shuren.png
sodeno-.png
sogyonokotowari.png
soifon-common.png
soifon-epic.png
soifon-gold.png
soifon-legendary.png
soifon-mythic.png
soifon-rare.png
soifon-silver.png
starrk-common.png
starrk-epic.png
starrk-gold.png
starrk-rare.png
sunsun-legendary.png
suzumebachi-epic.png
szayelaporo.png
szayel-epic.png
szayel-rare.png
tatsuki-common.png
tenjiro-legendary.png
tenjiro-mythic.png
tesla-rare.png
tessai-epic.png
tetsuzaemon-epic.png
tetsuzaemon-rare.png
tobiume.png
tosen-common.png
tosen-epic.png
tosen-gold.png
tosen-rare.png
tosen-silver.png
toshiro-common.png
toshiro-epic.png
toshiro-gold.png
toshiro-legendary.png
toshiro-mythic.png
toshiro-rare.png
toshiro-silver.png
toshirozombie-legendary.png
toshirozombie-mythic.png
tsukishima-epic.png
tsukkishima-rare.png
ukitake-common.png
ukitake-epic.png
ukitake-gold.png
ukitake-legendary.png
ukitake-rare.png
ukitake-silver.png
ulquiorra-common.png
ulquiorra-epic (2).png
ulquiorra-epic.png
ulquiorra-gold.png
ulquiorra-mythic.png
ulquiorra-rare.png
unohana-common.png
unohana-epic.png
unohana-gold.png
unohana-legendary.png
unohana-rare.png
urahara-common.png
urahara-epic.png
urahara-gold.png
urahara-legendary.png
urahara-mythic.png
urahara-rare.png
urahara-silver.png
ururu-common.png
uryu-common.png
uryu-epic.png
uryu-gold.png
uryu-legendary (2).png
uryu-legendary.png
uryu-mythic.png
uryu-rare.png
uryu-silver.png
white-epic.png
white-mythic.png
white-rare.png
white-silver.png
wonderwice-rare.png
yachiru-gold.png
yachiru-legendary.png
yachiru-mythic.png
yachiru-rare.png
yamamoto-common.png
yamamoto-epic.png
yamamoto-gold.png
yamamoto-legendary.png
yamamoto-mythic.png
yamamoto-rare.png
yammy-rare.png
yhwach-legendary (2).png
yhwach-legendary.png
yhwach-mythic.png
yin&yang.png
yoruichi-common.png
yoruichi-epic (2).png
yoruichi-epic.png
yoruichi-gold.png
yoruichi-legendary.png
yoruichi-mythic (2).png
yoruichi-mythic.png
yoruichi-rare.png
yoruichi-silver.png
yukio-common.png
yukio-epic.png
yukio-legendary.png
yukio-rare.png
yumichika-epic.png
yumichika-gold.png
yumichika-legendary.png
yumichika-silver.png
zabimaru-epic.png
zangetsu-epic.png
zangetsu-rare.png
zennosuke-common.png
zommari-epic.png
zommari-rare.png
`.trim().split(/\r?\n/);

const legacyImageRarityOverrides = {
  "driscoll.png": "legendary",
  "findorr.png": "epic",
  "hisagomaru.png": "epic",
  "kazeshini.png": "epic",
  "koga.png": "epic",
  "kusaka.png": "epic",
  "rin.png": "epic",
  "robert.png": "legendary",
  "rurichiyo.png": "epic",
  "senna.png": "epic",
  "shuren.png": "epic",
  "sodeno-.png": "epic",
  "sogyonokotowari.png": "epic",
  "szayelaporo.png": "gold",
  "tobiume.png": "epic",
  "yin&yang.png": "epic"
};
const imageCardFiles = window.cardImageFiles;
if (!Array.isArray(imageCardFiles) || imageCardFiles.length === 0) {
  throw new Error("La liste des images de cartes est introuvable.");
}
const imageRarityOverrides = {
  "findorr_calius.png": "epic",
  "kazeshini.png": "epic",
  "kôga_kuchiki.png": "epic",
  "rin_tsubokura.png": "epic",
  "robert_accutrone.png": "legendary",
  "rurichiyo_kasumiooji.png": "epic",
  "senna.png": "epic",
  "shuren.png": "epic",
  "sode_no_shirayuki-.png": "epic",
  "szayelaporro_granz.png": "gold",
  "sôgyonokotowari.png": "epic",
  "tobiume.png": "epic",
  "yin&yang.png": "epic"
};
const raritySuffixPattern = /^(.*?)[-_](common|rare|epic|legendary|mythic|silver|gold)(?: \((\d+)\))?$/i;

function createImageCards(files, rarityOverrides, preserveLegacyIds = false) {
  const ids = new Set();
  return files.map((fileName) => {
    const baseName = fileName.replace(/\.[^.]+$/, "");
    const match = baseName.match(raritySuffixPattern);
    const overrideRarity = rarityOverrides[fileName];
    const rarity = overrideRarity || (match && match[2].toLowerCase());
    if (!rarity) throw new Error(`Rareté manquante pour l'image : ${fileName}`);

    const nameSlug = (match ? match[1] : baseName).replace(/[-_]+$/, "");
    const displayName = nameSlug
      .replace(/[_&]+/g, " ")
      .split(/[\s-]+/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
    const idBase = preserveLegacyIds
      ? baseName.toLowerCase()
      : baseName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    const id = idBase
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    if (!id || ids.has(id)) throw new Error(`Identifiant de carte manquant ou dupliqué : ${fileName}`);
    ids.add(id);

    return {
      id,
      name: displayName,
      rarity,
      image: `images/${fileName}`,
      symbol: "",
      top: rarity === "gold" ? "#b9924d" : "#93a6b8",
      bottom: rarity === "gold" ? "#54402a" : "#39475a",
      glow: rarity === "gold" ? "#ffe9a3" : "#e5f3ff"
    };
  });
}

const cards = createImageCards(imageCardFiles, imageRarityOverrides);
const cardIds = new Set(cards.map((card) => card.id));
const legacyCards = createImageCards(legacyImageCardFiles, legacyImageRarityOverrides, true);
const legacyCardIdOverrides = {
  "aizenhogyo-mythic": "sosuke-aizen-hogyoku-mythic",
  "bambiettazombie-legendary": "zombie-bambiette-legendary",
  "hisagomaru-epic": "hisagomaru-common",
  "ichigoult-epic": "ichigo-kurosaki-epic",
  "ichigoult-mythic": "ichigo-vasto-lorde-mythic",
  "ishin-common": "isshin-kurosaki-common",
  "ishin-epic": "isshin-kurosaki-epic",
  "ishin-mythic": "isshin-kurosaki-mythic",
  "ishin-rare": "isshin-kurosaki-rare",
  "rangikuzombie-legendary": "zombie-rangiku-legendary",
  "toshirozombie-legendary": "zombie-toshiro-legendary",
  "toshirozombie-mythic": "zombie-toshiro-mythic"
};
const legacyCardIdAliases = buildLegacyCardIdAliases();

function getCardIdentity(card) {
  const suffix = card.id.match(/^(.*?)-(common|rare|epic|legendary|mythic|silver|gold)(?:-(\d+))?$/);
  if (suffix && suffix[2] === card.rarity) {
    return {
      name: suffix[1],
      rarity: suffix[2],
      variant: Number(suffix[3]) || 1
    };
  }
  return { name: card.id, rarity: card.rarity, variant: 1 };
}

function normalizeCardName(value) {
  return value.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

function getEditDistance(first, second) {
  let previousRow = Array.from({ length: second.length + 1 }, (_, index) => index);
  for (let firstIndex = 1; firstIndex <= first.length; firstIndex += 1) {
    const currentRow = [firstIndex];
    for (let secondIndex = 1; secondIndex <= second.length; secondIndex += 1) {
      const substitutionCost = first[firstIndex - 1] === second[secondIndex - 1] ? 0 : 1;
      currentRow[secondIndex] = Math.min(
        previousRow[secondIndex] + 1,
        currentRow[secondIndex - 1] + 1,
        previousRow[secondIndex - 1] + substitutionCost
      );
    }
    previousRow = currentRow;
  }
  return previousRow[second.length];
}

function scoreLegacyCardMatch(legacyIdentity, card) {
  const currentIdentity = getCardIdentity(card);
  const legacyName = normalizeCardName(legacyIdentity.name);
  const currentName = normalizeCardName(currentIdentity.name);
  const distance = getEditDistance(legacyName, currentName);
  const lengthDifference = Math.abs(legacyName.length - currentName.length);
  let nameScore;
  if (legacyName === currentName) {
    nameScore = 10000;
  } else if (currentName.startsWith(legacyName)) {
    nameScore = 9000 - lengthDifference;
  } else if (legacyName.startsWith(currentName)) {
    nameScore = 8500 - lengthDifference;
  } else if (currentName.includes(legacyName)) {
    nameScore = 8000 - lengthDifference;
  } else if (legacyName.includes(currentName)) {
    nameScore = 7500 - lengthDifference;
  } else {
    nameScore = 5000 - distance * 100 - lengthDifference;
  }
  return nameScore +
    (legacyIdentity.rarity === card.rarity ? 200 : 0) +
    (legacyIdentity.variant === currentIdentity.variant ? 20 : 0);
}

function findLegacyCardMatch(legacyCard) {
  const override = legacyCardIdOverrides[legacyCard.id];
  if (override && cardIds.has(override)) return override;

  const identity = getCardIdentity(legacyCard);
  const sameRarity = cards.filter((card) => card.rarity === identity.rarity);
  const exactVariant = sameRarity.filter((card) => getCardIdentity(card).variant === identity.variant);
  const sameRarityCandidates = exactVariant.length ? exactVariant : sameRarity;
  const sortByMatch = (candidates) => candidates
    .map((card) => ({ card, score: scoreLegacyCardMatch(identity, card) }))
    .sort((first, second) => second.score - first.score);
  const bestSameRarity = sortByMatch(sameRarityCandidates)[0];
  if (!bestSameRarity) return null;

  const sameName = normalizeCardName(identity.name);
  const bestSameName = normalizeCardName(getCardIdentity(bestSameRarity.card).name);
  const isStrongSameRarityMatch = sameName === bestSameName ||
    sameName.includes(bestSameName) ||
    bestSameName.includes(sameName) ||
    getEditDistance(sameName, bestSameName) <= 1;
  if (isStrongSameRarityMatch) return bestSameRarity.card.id;

  const bestAnyRarity = sortByMatch(cards)[0];
  if (!bestAnyRarity) return null;
  const anyName = normalizeCardName(getCardIdentity(bestAnyRarity.card).name);
  const isStrongNameMatch = sameName === anyName ||
    sameName.includes(anyName) ||
    anyName.includes(sameName) ||
    getEditDistance(sameName, anyName) <= 1;
  return isStrongNameMatch ? bestAnyRarity.card.id : null;
}

function buildLegacyCardIdAliases() {
  return new Map(legacyCards.flatMap((card) => {
    if (cardIds.has(card.id)) return [];
    const currentId = findLegacyCardMatch(card);
    return currentId ? [[card.id, currentId]] : [];
  }));
}

function resolveCardId(cardId) {
  return cardIds.has(cardId) ? cardId : legacyCardIdAliases.get(cardId) || null;
}

const STORAGE_KEY = "mythos-card-collection-v1";
const PACK_COUNT_KEY = "mythos-opened-packs-v1";
const PITY_PROGRESS_KEY = "mythos-pity-progress-v1";
const PENDING_PACK_KEY = "mythos-pending-pack-v1";
const ECONOMY_STORAGE_KEY = "mythos-economy-v1";
const SHOP_STORAGE_KEY = "mythos-shop-v1";
const SHOP_REFRESH_INTERVAL = 10 * 60 * 1000;
const styleCosts = [5, 10, 20, 50, 100];
const styleNames = ["Lueur", "Filigrane", "Reflets", "Aura", "Apothéose"];
const shopBasePrices = { common: 5, rare: 15, epic: 30, legendary: 60, mythic: 100 };
const shopDiscounts = { common: 20, rare: 33, epic: 50, legendary: 50, mythic: 50 };
const shopCoinRewards = { common: 0, rare: 0.5, epic: 2.5, legendary: 10, mythic: 25, silver: 10, gold: 25 };
const shopCategories = [
  { id: "common", title: "Communes", type: "regular" },
  { id: "rare", title: "Rares", type: "regular" },
  { id: "epic", title: "Épiques", type: "regular" },
  { id: "legendary", title: "Légendaires", type: "regular" },
  { id: "mythic", title: "Mythiques", type: "regular" },
  { id: "discount", title: "Promotions", type: "discount" }
];
const shopCodeRewards = {
  MAYURITHEGOAT: { cards: [{ cardId: "mayuri-kurotsuchi-legendary", quantity: 1 }] },
  MOMMYBAMBIETTA: { cards: [{ cardId: "bambietta-basterbine-legendary", quantity: 1 }] },
  SWEETIEFOX: { pack: "sweetieFox" },
  MOMMYCANDICE: { cards: [{ cardId: "candice-catnipp-legendary", quantity: 1 }] },
  "+1PIECEBLEUEFORIINRANGE1950": { blueCoins: 1950 },
  LAPIECE: { shopCoins: 100 },
  ILOVENARU: { pack: "goldStyle" },
  CAMERONEATROPLESEUM: { freeShopToken: true }
};
const cardStyleSparklesMarkup = `
  <span class="card-style-sparkles" aria-hidden="true">
    <span>✦</span><span>✧</span><span>✦</span><span>✧</span>
  </span>`;
const blueCoinDrops = {
  classic: [{ chance: 15, amount: 1 }],
  bronze: [{ chance: 25, amount: 1 }, { chance: 5, amount: 3 }],
  silver: [{ chance: 50, amount: 1 }, { chance: 20, amount: 2 }, { chance: 5, amount: 5 }],
  gold: [{ chance: 100, amount: 5 }]
};
const pityTiers = [
  { id: "bronze", name: "Bronze", interval: 10, multipliers: { epic: 1.5, legendary: 2, mythic: 2 } },
  { id: "silver", name: "Argent", interval: 50, multipliers: { epic: 1.75, legendary: 2.5, mythic: 3 } },
  { id: "gold", name: "Or", interval: 250, multipliers: { epic: 2, legendary: 3.5, mythic: 4 } }
];
const rarityById = Object.fromEntries(rarities.map((rarity) => [rarity.id, rarity]));
const rarityOrder = new Map(rarities.map((rarity, index) => [rarity.id, index]));
const hangmanAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const hangmanCharacters = buildHangmanCharacters();
let collection = loadCollection();
let packsOpened = loadPackCount();
let pityProgress = loadPityProgress();
let economy = loadEconomy();
let blueCoins = economy.blueCoins;
let cardStyles = economy.styles;
let shopState = loadShopState();
let activeFilter = "all";
let collectionSearch = "";
let collectionSort = "rarity-desc";
let toastTimer;
let pendingCards = [];
let revealedCount = 0;
let pendingBlueCoinReward = 0;
let activePackTier = null;
let activeCodePackType = null;
let selectedCardId = null;
let selectedDetailTab = "description";
let hangmanGame = null;

function isValidShopCoinBalance(value) {
  return typeof value === "number" && Number.isSafeInteger(value * 2) && value >= 0;
}

function formatShopCoins(value) {
  return value.toLocaleString("fr-FR", { maximumFractionDigits: 1 });
}

function buildHangmanCharacters() {
  const charactersByName = new Map();
  for (const card of cards) {
    const name = card.name.trim();
    const key = normalizeSearch(name);
    if (!key) continue;
    if (!charactersByName.has(key)) {
      charactersByName.set(key, { key, name, cards: [] });
    }
    charactersByName.get(key).cards.push(card);
  }
  return [...charactersByName.values()];
}

function loadCollection() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
    const migrated = {};
    for (const [savedCardId, quantity] of Object.entries(saved)) {
      if (!Number.isSafeInteger(quantity) || quantity <= 0) continue;
      const cardId = resolveCardId(savedCardId);
      if (!cardId) continue;
      const total = (migrated[cardId] || 0) + quantity;
      if (Number.isSafeInteger(total)) migrated[cardId] = total;
    }
    return migrated;
  } catch (error) {
    console.error("Impossible de lire la collection sauvegardée.", error);
    return {};
  }
}

function saveCollection() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collection));
  } catch (error) {
    console.error("Impossible de sauvegarder la collection.", error);
    showToast("La collection n'a pas pu être sauvegardée sur cet appareil.");
  }
}

function loadEconomy() {
  try {
    const saved = JSON.parse(localStorage.getItem(ECONOMY_STORAGE_KEY) || "{}");
    const styles = {};
    const savedStyles = saved.styles && typeof saved.styles === "object" && !Array.isArray(saved.styles)
      ? saved.styles
      : {};
    for (const [savedCardId, level] of Object.entries(savedStyles)) {
      const cardId = resolveCardId(savedCardId);
      if (!cardId || !Number.isInteger(level) || level < 0 || level > styleCosts.length) continue;
      styles[cardId] = Math.max(styles[cardId] || 0, level);
    }
    return {
      blueCoins: Number.isSafeInteger(saved.blueCoins) && saved.blueCoins >= 0 ? saved.blueCoins : 0,
      styles
    };
  } catch (error) {
    console.error("Impossible de lire les pièces bleues et styles sauvegardés.", error);
    return { blueCoins: 0, styles: {} };
  }
}

function saveEconomy() {
  try {
    localStorage.setItem(ECONOMY_STORAGE_KEY, JSON.stringify({
      blueCoins,
      styles: cardStyles
    }));
  } catch (error) {
    console.error("Impossible de sauvegarder les pièces bleues et styles.", error);
    showToast("Les pièces bleues et styles n'ont pas pu être sauvegardés sur cet appareil.");
  }
}

function loadShopState() {
  try {
    const saved = JSON.parse(localStorage.getItem(SHOP_STORAGE_KEY) || "null");
    const savedOffers = saved && Array.isArray(saved.offers)
      ? saved.offers.map((offer) => {
        if (!offer || typeof offer.cardId !== "string") return offer;
        const cardId = resolveCardId(offer.cardId);
        return cardId ? { ...offer, cardId } : offer;
      })
      : saved && saved.offers;
    const coins = saved && isValidShopCoinBalance(saved.coins) ? saved.coins : 0;
    const redeemedCodes = saved && Array.isArray(saved.redeemedCodes)
      ? [...new Set(saved.redeemedCodes.filter((code) => typeof code === "string"))]
      : [];
    const queuedPacks = saved && Array.isArray(saved.queuedPacks)
      ? saved.queuedPacks
        .filter((pack) => pack && ["sweetieFox", "goldStyle"].includes(pack.type))
        .map((pack) => ({ type: pack.type }))
      : [];
    const freeShopTokenUsed = !!(saved && saved.freeShopTokenUsed === true);
    const freeShopTokenAvailable = !freeShopTokenUsed &&
      !!(saved && saved.freeShopTokenAvailable === true);
    const freeShopUntil = saved && Number.isSafeInteger(saved.freeShopUntil) && saved.freeShopUntil > 0
      ? saved.freeShopUntil
      : 0;
    if (
      saved &&
      isValidShopOffers(savedOffers) &&
      Number.isSafeInteger(saved.nextRefreshAt) &&
      saved.nextRefreshAt > 0
    ) {
      return {
        coins,
        offers: savedOffers,
        nextRefreshAt: saved.nextRefreshAt,
        redeemedCodes,
        queuedPacks,
        freeShopTokenAvailable,
        freeShopTokenUsed,
        freeShopUntil
      };
    }
    return {
      coins,
      offers: generateShopOffers(),
      nextRefreshAt: Date.now() + SHOP_REFRESH_INTERVAL,
      redeemedCodes,
      queuedPacks,
      freeShopTokenAvailable,
      freeShopTokenUsed,
      freeShopUntil
    };
  } catch (error) {
    console.error("Impossible de lire la boutique sauvegardée.", error);
    return {
      coins: 0,
      offers: generateShopOffers(),
      nextRefreshAt: Date.now() + SHOP_REFRESH_INTERVAL,
      redeemedCodes: [],
      queuedPacks: [],
      freeShopTokenAvailable: false,
      freeShopTokenUsed: false,
      freeShopUntil: 0
    };
  }
}

function isValidShopOffers(offers) {
  if (!Array.isArray(offers) || offers.length !== 14) return false;
  const expectedCounts = { common: 3, rare: 3, epic: 2, legendary: 2, mythic: 1 };
  const counts = { common: 0, rare: 0, epic: 0, legendary: 0, mythic: 0 };
  const usedCardIds = new Set();
  let discountCount = 0;

  for (const offer of offers) {
    if (!offer || typeof offer.cardId !== "string" || typeof offer.purchased !== "boolean") return false;
    if (usedCardIds.has(offer.cardId)) return false;
    const card = cards.find((entry) => entry.id === offer.cardId);
    if (!card) return false;
    usedCardIds.add(offer.cardId);

    if (offer.type === "regular") {
      if (!Object.prototype.hasOwnProperty.call(expectedCounts, card.rarity)) return false;
      counts[card.rarity] += 1;
    } else if (offer.type === "discount") {
      if (!Object.prototype.hasOwnProperty.call(shopDiscounts, card.rarity)) return false;
      discountCount += 1;
    } else {
      return false;
    }
  }

  return discountCount === 3 &&
    Object.keys(expectedCounts).every((rarity) => counts[rarity] === expectedCounts[rarity]);
}

function generateShopOffers() {
  const offers = [];
  const usedCardIds = new Set();
  const addOffer = (rarity, type) => {
    const pool = cards.filter((card) =>
      card.rarity === rarity && !usedCardIds.has(card.id)
    );
    if (!pool.length) throw new Error(`Aucune carte disponible pour la rareté ${rarity}.`);
    const card = pool[Math.floor(Math.random() * pool.length)];
    usedCardIds.add(card.id);
    offers.push({ cardId: card.id, type, purchased: false });
  };

  for (const [rarity, count] of Object.entries({ common: 3, rare: 3, epic: 2, legendary: 2, mythic: 1 })) {
    for (let index = 0; index < count; index += 1) addOffer(rarity, "regular");
  }
  for (let index = 0; index < 3; index += 1) {
    addOffer(drawRarity(null), "discount");
  }
  return offers;
}

function saveShopState() {
  try {
    localStorage.setItem(SHOP_STORAGE_KEY, JSON.stringify(shopState));
  } catch (error) {
    console.error("Impossible de sauvegarder la boutique.", error);
    showToast("La boutique n'a pas pu être sauvegardée sur cet appareil.");
  }
}

function loadPackCount() {
  try {
    const saved = Number(localStorage.getItem(PACK_COUNT_KEY) || 0);
    return Number.isSafeInteger(saved) && saved >= 0 ? saved : 0;
  } catch (error) {
    console.error("Impossible de lire le compteur de paquets.", error);
    return 0;
  }
}

function getLegacyPityProgress() {
  const progress = {};
  const bronzeInterval = pityTiers[0].interval;
  for (const tier of pityTiers) {
    const packsSinceLegacyTier = packsOpened % tier.interval;
    progress[tier.id] = packsSinceLegacyTier - Math.floor(packsSinceLegacyTier / bronzeInterval);
  }
  return progress;
}

function loadPityProgress() {
  try {
    const savedValue = localStorage.getItem(PITY_PROGRESS_KEY);
    if (savedValue === null) {
      const progress = getLegacyPityProgress();
      savePityProgress(progress);
      return progress;
    }

    const saved = JSON.parse(savedValue);
    const progress = {};
    for (const tier of pityTiers) {
      const value = saved && saved[tier.id];
      progress[tier.id] = Number.isSafeInteger(value) && value >= 0 && value <= tier.interval ? value : 0;
    }
    return progress;
  } catch (error) {
    console.error("Impossible de lire la progression pity.", error);
    return getLegacyPityProgress();
  }
}

function savePityProgress(progress) {
  try {
    localStorage.setItem(PITY_PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error("Impossible de sauvegarder la progression pity.", error);
    showToast("La progression pity n'a pas pu être sauvegardée sur cet appareil.");
  }
}

function savePackCount() {
  try {
    localStorage.setItem(PACK_COUNT_KEY, String(packsOpened));
  } catch (error) {
    console.error("Impossible de sauvegarder le compteur de paquets.", error);
    showToast("Le compteur de paquets n'a pas pu être sauvegardé sur cet appareil.");
  }
}

function savePendingPack() {
  try {
    if (revealedCount >= pendingCards.length) {
      localStorage.removeItem(PENDING_PACK_KEY);
      return;
    }
    localStorage.setItem(PENDING_PACK_KEY, JSON.stringify({
      cardIds: pendingCards.map((card) => card.id),
      revealedCount,
      tierId: activePackTier ? activePackTier.id : null,
      blueCoinReward: pendingBlueCoinReward,
      codePackType: activeCodePackType
    }));
  } catch (error) {
    console.error("Impossible de sauvegarder le paquet en cours.", error);
    showToast("Le paquet en cours n'a pas pu être sauvegardé sur cet appareil.");
  }
}

function saveProgress() {
  saveCollection();
  saveEconomy();
  saveShopState();
  savePackCount();
  savePityProgress(pityProgress);
  savePendingPack();
}

function restorePendingPack() {
  try {
    const saved = JSON.parse(localStorage.getItem(PENDING_PACK_KEY) || "null");
    if (!saved || !Array.isArray(saved.cardIds) || saved.cardIds.length !== 5) return;
    const restoredCards = saved.cardIds.map((id) =>
      cards.find((card) => card.id === resolveCardId(id))
    );
    if (restoredCards.some((card) => !card)) return;
    if (!Number.isInteger(saved.revealedCount) || saved.revealedCount < 0 || saved.revealedCount >= restoredCards.length) return;

    pendingCards = restoredCards;
    revealedCount = saved.revealedCount;
    pendingBlueCoinReward = Number.isSafeInteger(saved.blueCoinReward) && saved.blueCoinReward > 0
      ? saved.blueCoinReward
      : 0;
    activePackTier = pityTiers.find((tier) => tier.id === saved.tierId) || null;
    activeCodePackType = ["sweetieFox", "goldStyle"].includes(saved.codePackType)
      ? saved.codePackType
      : null;
    if (activeCodePackType && shopState.queuedPacks.length &&
        shopState.queuedPacks[0].type === activeCodePackType) {
      shopState.queuedPacks.shift();
      saveShopState();
    }
    document.querySelector("#opened-pack-type").textContent = `PAQUET ${getPackDisplayName().toUpperCase()} OUVERT`;
    document.querySelector("#reveal-progress").textContent = `${revealedCount} / ${pendingCards.length} cartes découvertes`;
    renderPackBonus();
    document.querySelector("#pack-results").innerHTML = pendingCards.map((card, index) =>
      index < revealedCount ? cardMarkup(card, index, { reveal: true }) : cardBackMarkup(index)
    ).join("");
    const revealButton = document.querySelector("#reveal-next");
    revealButton.innerHTML = `<span>✧</span> Révéler la carte ${revealedCount + 1} <span class="button-arrow">↗</span>`;
    revealButton.classList.remove("hidden");
    document.querySelector("#open-pack").disabled = true;
    document.querySelector("#empty-open-pack").disabled = true;
    document.querySelector("#results-section").classList.remove("hidden");
  } catch (error) {
    console.error("Impossible de reprendre le paquet en cours.", error);
    showToast("Le paquet en cours n'a pas pu être repris.");
  }
}

function getPityTier() {
  return pityTiers.slice().reverse().find((tier) => pityProgress[tier.id] >= tier.interval) || null;
}

function advancePityProgressForClassicPack() {
  pityTiers.forEach((tier) => {
    pityProgress[tier.id] += 1;
  });
  const readyTier = getPityTier();
  if (readyTier) {
    pityTiers.slice(0, pityTiers.indexOf(readyTier)).forEach((tier) => {
      pityProgress[tier.id] = 0;
    });
  }
}

function resetPityCountersThrough(tier) {
  const tierIndex = pityTiers.indexOf(tier);
  pityTiers.slice(0, tierIndex + 1).forEach((lowerTier) => {
    pityProgress[lowerTier.id] = 0;
  });
}

function renderPityProgress() {
  document.querySelector("#packs-opened").textContent = packsOpened;
  for (const tier of pityTiers) {
    const progress = pityProgress[tier.id];
    document.querySelector(`#${tier.id}-counter`).textContent = `${progress} / ${tier.interval}`;
    const progressBar = document.querySelector(`#${tier.id}-progress`);
    progressBar.setAttribute("aria-valuenow", progress);
    progressBar.querySelector("span").style.width = `${progress / tier.interval * 100}%`;
  }

  const queuedPack = shopState.queuedPacks[0] || null;
  const queuedGoldPackTier = queuedPack && queuedPack.type === "goldStyle"
    ? pityTiers.find((tier) => tier.id === "gold")
    : null;
  const nextTier = queuedGoldPackTier || (!queuedPack ? getPityTier() : null);
  const nextName = queuedPack
    ? queuedPack.type === "sweetieFox" ? "SweetieFox" : "Or"
    : nextTier ? nextTier.name : "Classique";
  document.querySelector("#next-pack-name").textContent = nextName;
  document.querySelector("#next-pack-eyebrow").textContent = `PROCHAIN PAQUET · ${nextName.toUpperCase()}`;
  const packClass = queuedPack && queuedPack.type === "sweetieFox"
    ? "sweetiefox"
    : nextTier ? nextTier.id : "classic";
  document.querySelector("#booster-pack").className = `booster-pack ${packClass}`;
  document.querySelector("#booster-title").textContent = queuedPack && queuedPack.type === "sweetieFox"
    ? "SweetieFox"
    : nextName.toUpperCase();
  renderRarities(nextTier, queuedPack ? queuedPack.type : null);
}

function renderWallet() {
  document.querySelector("#blue-coin-balance").textContent = blueCoins;
}

function getShopOfferPrice(offer, card) {
  if (shopState.freeShopUntil > Date.now()) return 0;
  const basePrice = shopBasePrices[card.rarity];
  if (!basePrice) throw new Error(`Prix boutique absent pour la rareté ${card.rarity}.`);
  if (offer.type !== "discount") return basePrice;
  return Math.floor(basePrice * (100 - shopDiscounts[card.rarity]) / 100);
}

function renderShopWallet() {
  document.querySelector("#shop-coin-balance").textContent = formatShopCoins(shopState.coins);
}

function renderShopCountdown() {
  const remainingSeconds = Math.max(0, Math.ceil((shopState.nextRefreshAt - Date.now()) / 1000));
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  document.querySelector("#shop-refresh-countdown").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function refreshShopIfNeeded() {
  if (Date.now() < shopState.nextRefreshAt) return false;
  shopState.offers = generateShopOffers();
  shopState.nextRefreshAt = Date.now() + SHOP_REFRESH_INTERVAL;
  shopState.freeShopUntil = 0;
  saveShopState();
  return true;
}

function renderShop() {
  refreshShopIfNeeded();
  renderShopWallet();
  const isShopFree = shopState.freeShopUntil > Date.now();
  const freeBanner = document.querySelector("#shop-free-banner");
  freeBanner.classList.toggle("hidden", !isShopFree);
  freeBanner.textContent = isShopFree
    ? "Jeton activé : toutes les cartes sont gratuites jusqu'au prochain renouvellement."
    : "";
  const renderedOffers = shopState.offers.map((offer, index) => {
    const card = cards.find((entry) => entry.id === offer.cardId);
    const rarity = rarityById[card.rarity];
    const price = getShopOfferPrice(offer, card);
    const originalPrice = shopBasePrices[card.rarity];
    const discount = offer.type === "discount" ? shopDiscounts[card.rarity] : 0;
    const insufficientFunds = shopState.coins < price;
    const buttonLabel = offer.purchased
      ? "Déjà achetée"
      : isShopFree
        ? "Récupérer gratuitement"
      : insufficientFunds
        ? "Pièces insuffisantes"
        : `Acheter · ${price} ◈`;

    const markup = `
      <article class="shop-offer ${card.rarity} ${offer.type} ${offer.purchased ? "purchased" : ""}" style="--rarity-color:${rarity.color}">
        <div class="shop-offer-art"><img src="${card.image}" alt="${card.name}" loading="lazy"></div>
        <div class="shop-offer-body">
          <div class="shop-offer-type">${discount ? `PROMO · −${discount}%` : "STOCK GARANTI"}</div>
          <h2>${card.name}</h2>
          <div class="shop-offer-rarity">${rarity.name}</div>
          <div class="shop-offer-price">
            <strong>${isShopFree ? "GRATUIT" : `${price} ◈`}</strong>
            ${discount || isShopFree ? `<del>${originalPrice} ◈</del>` : ""}
          </div>
          <button type="button" data-shop-offer="${index}" ${offer.purchased || insufficientFunds ? "disabled" : ""}>${buttonLabel}</button>
        </div>
      </article>`;
    return { offer, card, markup };
  });
  document.querySelector("#shop-grid").innerHTML = shopCategories.map((category) => {
    const categoryOffers = renderedOffers.filter(({ offer, card }) =>
      offer.type === category.type &&
      (category.type === "discount" || card.rarity === category.id)
    );
    return `
      <section class="shop-category" aria-labelledby="shop-category-${category.id}">
        <div class="shop-category-heading">
          <h2 id="shop-category-${category.id}">${category.title}</h2>
          <span>${categoryOffers.length} carte${categoryOffers.length === 1 ? "" : "s"}</span>
        </div>
        <div class="shop-category-grid">${categoryOffers.map(({ markup }) => markup).join("")}</div>
        ${category.id === "discount" && shopState.freeShopTokenAvailable
          ? `<button type="button" class="shop-token" data-shop-token>
              <span class="shop-token-coin" aria-hidden="true">C</span>
              <span class="shop-token-copy"><strong>Jeton doré</strong><small>Active la gratuité jusqu'au prochain renouvellement.</small></span>
              <span class="shop-token-arrow" aria-hidden="true">↗</span>
            </button>`
          : ""}
      </section>`;
  }).join("");
  renderShopCountdown();
}

function updateShopTimer() {
  if (refreshShopIfNeeded()) {
    renderShop();
    return;
  }
  renderShopCountdown();
}

function purchaseShopOffer(offerIndex) {
  if (refreshShopIfNeeded()) {
    renderShop();
    return;
  }
  if (!Number.isInteger(offerIndex) || offerIndex < 0 || offerIndex >= shopState.offers.length) return;

  const offer = shopState.offers[offerIndex];
  if (offer.purchased) return;
  const card = cards.find((entry) => entry.id === offer.cardId);
  const price = getShopOfferPrice(offer, card);
  if (shopState.coins < price) {
    showToast("Tu n'as pas assez de pièces boutique.");
    return;
  }

  shopState.coins -= price;
  collection[card.id] = (Number(collection[card.id]) || 0) + 1;
  offer.purchased = true;
  saveCollection();
  saveShopState();
  renderShop();
  renderCollection();
  showToast(`${card.name} a rejoint ta collection.`);
}

function activateFreeShopToken() {
  if (refreshShopIfNeeded()) {
    renderShop();
    return;
  }
  if (!shopState.freeShopTokenAvailable || shopState.freeShopTokenUsed) return;
  shopState.freeShopTokenAvailable = false;
  shopState.freeShopTokenUsed = true;
  shopState.freeShopUntil = shopState.nextRefreshAt;
  saveShopState();
  renderShop();
  showToast("La boutique est gratuite jusqu'au prochain renouvellement !");
}

function applyShopCodeReward(reward) {
  if (!reward || typeof reward !== "object" || Array.isArray(reward)) {
    throw new Error("La récompense du code est invalide.");
  }
  const allowedFields = new Set(["shopCoins", "blueCoins", "cards", "pack", "freeShopToken"]);
  if (Object.keys(reward).some((field) => !allowedFields.has(field))) {
    throw new Error("La récompense du code contient un élément non pris en charge.");
  }

  const shopCoinReward = reward.shopCoins === undefined ? 0 : reward.shopCoins;
  const blueCoinReward = reward.blueCoins === undefined ? 0 : reward.blueCoins;
  const cardRewards = reward.cards === undefined ? [] : reward.cards;
  const packReward = reward.pack === undefined ? null : reward.pack;
  const tokenReward = reward.freeShopToken === undefined ? false : reward.freeShopToken;
  if (!Number.isSafeInteger(shopCoinReward) || shopCoinReward < 0 ||
      !Number.isSafeInteger(blueCoinReward) || blueCoinReward < 0 ||
      !Array.isArray(cardRewards) ||
      (packReward !== null && !["sweetieFox", "goldStyle"].includes(packReward)) ||
      typeof tokenReward !== "boolean") {
    throw new Error("La récompense du code est invalide.");
  }
  if (!shopCoinReward && !blueCoinReward && !cardRewards.length && !packReward && !tokenReward) {
    throw new Error("Ce code n'a pas de récompense configurée.");
  }
  if (tokenReward && (shopState.freeShopTokenAvailable || shopState.freeShopTokenUsed)) {
    throw new Error("Le jeton de gratuité a déjà été distribué ou utilisé.");
  }

  const cardsToAdd = cardRewards.map((cardReward) => {
    const card = cardReward && cards.find((entry) => entry.id === cardReward.cardId);
    if (!card || !Number.isSafeInteger(cardReward.quantity) || cardReward.quantity <= 0 ||
        !Number.isSafeInteger((Number(collection[card.id]) || 0) + cardReward.quantity)) {
      throw new Error("Une carte de la récompense du code est invalide.");
    }
    return { card, quantity: cardReward.quantity };
  });
  if (!isValidShopCoinBalance(shopState.coins + shopCoinReward) ||
      !Number.isSafeInteger(blueCoins + blueCoinReward)) {
    throw new Error("Le solde maximal serait dépassé par cette récompense.");
  }

  shopState.coins += shopCoinReward;
  blueCoins += blueCoinReward;
  if (packReward) shopState.queuedPacks.push({ type: packReward });
  if (tokenReward) shopState.freeShopTokenAvailable = true;
  for (const { card, quantity } of cardsToAdd) {
    collection[card.id] = (Number(collection[card.id]) || 0) + quantity;
  }
  saveShopState();
  saveEconomy();
  saveCollection();
  renderShop();
  renderWallet();
  renderCollection();
  renderPityProgress();

  const rewards = [];
  if (shopCoinReward) rewards.push(`${shopCoinReward} pièces boutique`);
  if (blueCoinReward) rewards.push(`${blueCoinReward} pièces bleues`);
  if (cardsToAdd.length) {
    rewards.push(cardsToAdd.map(({ card, quantity }) => `${card.name} ×${quantity}`).join(", "));
  }
  if (packReward === "sweetieFox") rewards.push("un paquet SweetieFox ajouté à la file");
  if (packReward === "goldStyle") rewards.push("un paquet Or ajouté à la file");
  if (tokenReward) rewards.push("un jeton doré ajouté à la boutique");
  return rewards.join(" · ");
}

function redeemShopCode(code) {
  const normalizedCode = String(code).trim().toUpperCase();
  const feedback = document.querySelector("#shop-code-feedback");
  if (!normalizedCode) {
    feedback.textContent = "Saisis un code avant de l'utiliser.";
    return;
  }
  if (shopState.redeemedCodes.includes(normalizedCode)) {
    feedback.textContent = "Ce code a déjà été utilisé.";
    return;
  }

  const reward = Object.prototype.hasOwnProperty.call(shopCodeRewards, normalizedCode)
    ? shopCodeRewards[normalizedCode]
    : null;
  if (!reward) {
    feedback.textContent = "Ce code n'est pas reconnu ou n'est pas encore activé.";
    return;
  }

  try {
    const rewardDescription = applyShopCodeReward(reward);
    shopState.redeemedCodes.push(normalizedCode);
    saveShopState();
    document.querySelector("#shop-code-input").value = "";
    feedback.textContent = `Code accepté : ${rewardDescription}.`;
  } catch (error) {
    console.error("Impossible d'appliquer le code de récompense.", error);
    feedback.textContent = "La récompense de ce code n'a pas pu être appliquée.";
  }
}

function renderPackBonus() {
  const bonusElement = document.querySelector("#pack-bonus");
  bonusElement.classList.toggle("hidden", pendingBlueCoinReward === 0);
  bonusElement.textContent = pendingBlueCoinReward
    ? `Bonus du paquet : +${pendingBlueCoinReward} pièce${pendingBlueCoinReward > 1 ? "s" : ""} bleue${pendingBlueCoinReward > 1 ? "s" : ""}`
    : "";
}

function getPackDisplayName() {
  if (activeCodePackType === "sweetieFox") return "SweetieFox";
  if (activeCodePackType === "goldStyle") return "Or";
  return activePackTier ? activePackTier.name : "Classique";
}

function getCardStyleLevel(cardId) {
  return cardStyles[cardId] || 0;
}

function cardStarCount(card) {
  return Math.min(Math.max((collection[card.id] || 0) - 1, 0), 7);
}

function getShopCoinsForReveal(card, quantityAfterReveal) {
  const baseReward = shopCoinRewards[card.rarity] || 0;
  const fullStars = Math.min(Math.max(quantityAfterReveal - 1, 0), 7) === 7;
  if (!fullStars) return baseReward;
  return card.rarity === "common" ? 0.5 : baseReward * 2;
}

function cardStarsMarkup(card) {
  const stars = cardStarCount(card);
  const label = `${stars} étoile${stars > 1 ? "s" : ""} sur 7`;
  const symbols = Array.from({ length: 7 }, (_, star) =>
    `<span class="${star < stars ? "filled" : ""}">★</span>`
  ).join("");
  return `<div class="card-stars" aria-label="${label}">${symbols}</div>`;
}

function renderRarities(tier, codePackType = null) {
  const rates = codePackType === "sweetieFox"
    ? rarities.map((rarity) => ({
      id: rarity.id,
      rate: rarity.id === "legendary" ? 80 : rarity.id === "mythic" ? 20 : 0
    }))
    : getAdjustedRates(tier);
  const rarityCards = rarities.filter((rarity) =>
    rates.find((rate) => rate.id === rarity.id).rate > 0
  ).map((rarity) => `
    <article class="rarity-item" style="--rarity-color:${rarity.color}">
      <div class="rarity-top"><span class="rarity-name">${rarity.name}</span><span class="rarity-icon">${rarity.icon}</span></div>
      <div class="rarity-rate">${rates.find((rate) => rate.id === rarity.id).rate.toLocaleString("fr-FR", { maximumFractionDigits: 1 })}<span style="font-size:15px">%</span></div>
    </article>
  `).join("");
  const coinDrops = getBlueCoinDrops(tier);
  const totalCoinChance = coinDrops.reduce((sum, drop) => sum + drop.chance, 0);
  const coinOutcomes = coinDrops.map((drop, index) => {
    const displayedChance = index === coinDrops.length - 1
      ? totalCoinChance - coinDrops.slice(0, index).reduce((sum, outcome) =>
        sum + Math.round(outcome.chance * 10) / 10, 0
      )
      : Math.round(drop.chance * 10) / 10;
    return `<span>${displayedChance.toLocaleString("fr-FR", { maximumFractionDigits: 1 })}% · ${drop.amount} pièce${drop.amount > 1 ? "s" : ""}</span>`;
  }).join("");
  document.querySelector("#rarity-list").innerHTML = `${rarityCards}
    <article class="rarity-item blue-coin-rate">
      <div class="rarity-top"><span class="rarity-name">Pièces bleues</span><span class="rarity-icon">◆</span></div>
      <div class="blue-coin-outcomes">${coinOutcomes}</div>
    </article>`;
}

function cardMarkup(card, index, options = {}) {
  const rarity = rarityById[card.rarity];
  const quantity = Number(collection[card.id]) || 0;
  const owned = options.reveal || quantity > 0;
  const showNew = options.newIds && options.newIds.has(card.id);
  const styleLevel = getCardStyleLevel(card.id);
  return `
    <article class="card ${card.rarity} card-style-${styleLevel}" data-card-id="${card.id}" data-style-level="${styleLevel}" ${options.clickable ? 'role="button" tabindex="0"' : ""} style="animation-delay:${index * 65}ms">
      ${showNew ? '<span class="new-badge">NOUVEAU</span>' : ""}
      <span class="card-style-overlay" aria-hidden="true"><span class="card-style-emblem">${rarity.icon}</span></span>
      <div class="card-art" style="--art-top:${card.top};--art-bottom:${card.bottom};--art-glow:${card.glow}">
        ${cardStyleSparklesMarkup}
        <span class="card-spark one">✦</span><span class="card-spark two">✧</span>
        ${card.image
          ? `<img src="${card.image}" alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover">`
          : `<span class="card-symbol">${card.symbol}</span>`}
        <span class="card-style-glint" aria-hidden="true"></span>
      </div>
      <div class="card-info">
        ${owned ? cardStarsMarkup(card) : ""}
        <div class="card-caption">
          <div class="card-name">${owned ? card.name : "Carte inconnue"}</div>
          ${owned ? `<div class="card-rarity">${rarity.name}</div>` : ""}
        </div>
      </div>
    </article>`;
}

function cardBackMarkup(index) {
  return `
    <article class="card card-back" style="animation-delay:${index * 65}ms" aria-label="Carte à découvrir">
      <div class="card-art"><span class="card-back-symbol">✳</span></div>
      <div class="card-info"><div class="card-caption"><div class="card-name">Carte à découvrir</div></div></div>
    </article>`;
}

function renderCollection() {
  const ownedCards = cards.filter((card) => (collection[card.id] || 0) > 0);
  const totalOwned = Object.values(collection).reduce((sum, quantity) => sum + (Number(quantity) || 0), 0);
  document.querySelector(".collection-nav-count").textContent = totalOwned;
  document.querySelector("#collection-count").textContent = ownedCards.length;
  document.querySelector("#collection-total").textContent = cards.length;
  document.querySelector("#collection-summary").textContent = ownedCards.length
    ? `${totalOwned} carte${totalOwned > 1 ? "s" : ""} découverte${totalOwned > 1 ? "s" : ""} · ${cards.length - ownedCards.length} trésor${cards.length - ownedCards.length > 1 ? "s" : ""} encore à trouver.`
    : "Chaque grande collection commence quelque part.";
  document.querySelector("#owned-count").textContent = `${totalOwned} carte${totalOwned > 1 ? "s" : ""} obtenue${totalOwned > 1 ? "s" : ""}`;
  document.querySelector("#empty-state").classList.toggle("hidden", ownedCards.length > 0);

  const searchTerm = normalizeSearch(collectionSearch);
  const visibleCards = ownedCards
    .filter((card) => activeFilter === "all" || card.rarity === activeFilter)
    .filter((card) => !searchTerm || normalizeSearch(card.name).includes(searchTerm))
    .sort((first, second) => {
      const nameOrder = first.name.localeCompare(second.name, "fr");
      if (collectionSort === "name-desc") return -nameOrder;
      if (collectionSort === "rarity-asc" || collectionSort === "rarity-desc") {
        const rarityOrderDifference = rarityOrder.get(first.rarity) - rarityOrder.get(second.rarity);
        if (rarityOrderDifference !== 0) return collectionSort === "rarity-asc" ? rarityOrderDifference : -rarityOrderDifference;
      }
      if (collectionSort === "stars-asc" || collectionSort === "stars-desc") {
        const starDifference = cardStarCount(first) - cardStarCount(second);
        if (starDifference !== 0) return collectionSort === "stars-asc" ? starDifference : -starDifference;
      }
      return nameOrder;
    });
  const grid = document.querySelector("#collection-grid");
  grid.classList.toggle("hidden", visibleCards.length === 0);
  document.querySelector("#no-collection-results").classList.toggle("hidden", ownedCards.length === 0 || visibleCards.length > 0);
  grid.innerHTML = visibleCards.map((card, index) => cardMarkup(card, index, { clickable: true })).join("");
}

function normalizeSearch(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("fr");
}

function renderStylePanel(card) {
  const currentLevel = getCardStyleLevel(card.id);
  const currentName = currentLevel ? styleNames[currentLevel - 1] : "Aucun";
  document.querySelector("#style-current-level").textContent = `Style actuel : ${currentName} (${currentLevel}/${styleCosts.length})`;
  document.querySelector("#style-level-list").innerHTML = styleCosts.map((cost, index) => {
    const level = index + 1;
    const purchased = level <= currentLevel;
    const available = level === currentLevel + 1;
    const canPurchase = available && blueCoins >= cost;
    const status = purchased
      ? "Acquis"
      : !available
        ? "Verrouillé"
        : blueCoins < cost
          ? "Pièces bleues insuffisantes"
          : "Débloquer";
    return `
      <div class="style-level-option ${card.rarity} ${canPurchase ? "available" : ""} ${purchased ? "purchased" : ""}">
        <div class="style-level-preview card ${card.rarity} card-style-${level}" aria-hidden="true"><span class="card-style-overlay"></span></div>
        <div class="style-level-description">
          <strong>Palier ${level} · ${styleNames[index]}</strong>
          <span>Coût : <b>${cost}</b> pièces bleues</span>
        </div>
        <button type="button" data-style-level="${level}" ${canPurchase ? "" : "disabled"}>${status}</button>
      </div>`;
  }).join("");
}

function renderCardDetail() {
  const card = cards.find((item) => item.id === selectedCardId);
  if (!card || !(collection[card.id] > 0)) {
    showView("collection");
    return;
  }
  document.querySelector("#card-detail").style.setProperty(
    "--detail-background-image",
    card.image ? `url("${card.image}")` : "none"
  );
  document.querySelector("#detail-heading").textContent = card.name;
  const rarityElement = document.querySelector("#detail-card-rarity");
  rarityElement.textContent = rarityById[card.rarity].name;
  rarityElement.className = `detail-card-rarity ${card.rarity}`;
  document.querySelector("#detail-card-preview").innerHTML = cardMarkup(card, 0, { reveal: true });

  for (const tabName of ["description", "style"]) {
    const active = selectedDetailTab === tabName;
    document.querySelector(`#${tabName}-tab`).classList.toggle("active", active);
    document.querySelector(`#${tabName}-tab`).setAttribute("aria-selected", active);
    document.querySelector(`#${tabName}-panel`).classList.toggle("hidden", !active);
  }
  renderStylePanel(card);
}

function openCardDetails(cardId) {
  const card = cards.find((item) => item.id === cardId);
  if (!card || !(collection[card.id] > 0)) return;
  selectedCardId = card.id;
  selectedDetailTab = "description";
  document.querySelector("#collection-content").classList.add("hidden");
  document.querySelector("#card-detail").classList.remove("hidden");
  renderCardDetail();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function purchaseStyle(level) {
  const card = cards.find((item) => item.id === selectedCardId);
  if (!card || !(collection[card.id] > 0)) return;
  const currentLevel = getCardStyleLevel(card.id);
  const index = level - 1;
  if (index < 0 || index >= styleCosts.length || level !== currentLevel + 1) return;

  const cost = styleCosts[index];
  if (blueCoins < cost) {
    showToast("Tu n'as pas assez de pièces bleues pour ce style.");
    return;
  }

  blueCoins -= cost;
  cardStyles[card.id] = level;
  saveEconomy();
  renderWallet();
  renderCollection();
  renderCardDetail();
  showToast(`Style ${styleNames[index]} débloqué pour ${card.name}.`);
}

function renderFilters() {
  const filters = [{ id: "all", name: "Toutes" }, ...rarities];
  document.querySelector("#rarity-filters").innerHTML = filters.map((filter) => `
    <button type="button" class="filter-button ${activeFilter === filter.id ? "active" : ""}" data-filter="${filter.id}" aria-pressed="${activeFilter === filter.id}">${filter.name}</button>
  `).join("");
}

function getAdjustedRates(tier) {
  const adjustedRates = rarities.map((rarity) => ({
    id: rarity.id,
    rate: rarity.rate * (tier ? tier.multipliers[rarity.id] || 1 : 1)
  }));
  const boostedRate = adjustedRates
    .filter((rarity) => !["common", "rare", "silver", "gold"].includes(rarity.id))
    .reduce((sum, rarity) => sum + rarity.rate, 0);
  const remainingCommonRareRate = 100 - boostedRate;
  const commonRate = remainingCommonRareRate * (55 / 80);
  adjustedRates.find((rarity) => rarity.id === "common").rate = commonRate;
  adjustedRates.find((rarity) => rarity.id === "rare").rate = remainingCommonRareRate * (25 / 80);
  if (tier && (tier.id === "silver" || tier.id === "gold")) {
    adjustedRates.find((rarity) => rarity.id === tier.id).rate = commonRate;
    adjustedRates.find((rarity) => rarity.id === "common").rate = 0;
  }
  return adjustedRates;
}

function getBlueCoinDrops(tier) {
  const baseDrops = blueCoinDrops[tier ? tier.id : "classic"];
  const baseChance = baseDrops.reduce((sum, drop) => sum + drop.chance, 0);
  const adjustedChance = Math.min(100, baseChance * 2);
  return baseDrops.map((drop) => ({
    chance: drop.chance / baseChance * adjustedChance,
    amount: drop.amount * 3
  }));
}

function rollBlueCoinReward(tier) {
  const roll = Math.random() * 100;
  let threshold = 0;
  for (const drop of getBlueCoinDrops(tier)) {
    threshold += drop.chance;
    if (roll < threshold) return drop.amount;
  }
  return 0;
}

function drawRarity(tier) {
  const adjustedRates = getAdjustedRates(tier);
  const roll = Math.random() * 100;
  let threshold = 0;
  for (const rarity of adjustedRates) {
    threshold += rarity.rate;
    if (roll < threshold) return rarity.id;
  }
  return adjustedRates[adjustedRates.length - 1].id;
}

function openPack() {
  if (pendingCards.length && revealedCount < pendingCards.length) {
    showToast("Révèle les cartes restantes avant d'ouvrir un autre paquet.");
    return;
  }
  const queuedPack = shopState.queuedPacks[0] || null;
  activeCodePackType = queuedPack ? queuedPack.type : null;
  activePackTier = activeCodePackType === "goldStyle"
    ? pityTiers.find((tier) => tier.id === "gold")
    : activeCodePackType ? null : getPityTier();
  pendingBlueCoinReward = rollBlueCoinReward(activePackTier);
  blueCoins += pendingBlueCoinReward;
  if (pendingBlueCoinReward > 0) saveEconomy();
  renderWallet();
  packsOpened += 1;
  if (!activeCodePackType) {
    if (activePackTier) {
      resetPityCountersThrough(activePackTier);
    } else {
      advancePityProgressForClassicPack();
    }
  }
  savePackCount();
  savePityProgress(pityProgress);
  const drawnCardIds = new Set();
  const drawCardOfRarity = (rarity) => {
    const pool = cards.filter((card) =>
      card.rarity === rarity && !drawnCardIds.has(card.id)
    );
    if (!pool.length) throw new Error(`Aucune carte disponible pour la rareté ${rarity}.`);
    const card = pool[Math.floor(Math.random() * pool.length)];
    drawnCardIds.add(card.id);
    return card;
  };
  pendingCards = activeCodePackType === "sweetieFox"
    ? [
      ...Array.from({ length: 4 }, () => drawCardOfRarity("legendary")),
      drawCardOfRarity("mythic")
    ]
    : Array.from({ length: 5 }, () => {
    const rarity = drawRarity(activePackTier);
    const rarityPool = cards.filter((card) => card.rarity === rarity && !drawnCardIds.has(card.id));
    const pool = rarityPool.length ? rarityPool : cards.filter((card) => !drawnCardIds.has(card.id));
    if (!pool.length) throw new Error("Il faut au moins cinq cartes différentes pour ouvrir un paquet.");
    const card = pool[Math.floor(Math.random() * pool.length)];
    drawnCardIds.add(card.id);
    return card;
    });
  pendingCards.sort((first, second) => rarityOrder.get(first.rarity) - rarityOrder.get(second.rarity));
  if (activeCodePackType === "goldStyle") {
    pendingCards.forEach((card) => {
      cardStyles[card.id] = styleCosts.length;
    });
    saveEconomy();
  }
  revealedCount = 0;
  savePendingPack();
  if (queuedPack) {
    shopState.queuedPacks.shift();
    saveShopState();
  }
  renderPityProgress();
  document.querySelector("#open-pack").disabled = true;
  document.querySelector("#empty-open-pack").disabled = true;
  const openedPackName = getPackDisplayName();
  document.querySelector("#opened-pack-type").textContent = `PAQUET ${openedPackName.toUpperCase()} OUVERT`;
  renderPackBonus();
  document.querySelector("#pack-results").innerHTML = pendingCards.map((card, index) => cardBackMarkup(index)).join("");
  document.querySelector("#reveal-progress").textContent = `0 / ${pendingCards.length} cartes découvertes`;
  const revealButton = document.querySelector("#reveal-next");
  revealButton.disabled = false;
  revealButton.innerHTML = '<span>✧</span> Révéler la première carte <span class="button-arrow">↗</span>';
  revealButton.classList.remove("hidden");
  document.querySelector("#results-section").classList.remove("hidden");
  document.querySelector("#results-section").scrollIntoView({ behavior: "smooth", block: "start" });
}

function revealNextCard() {
  if (revealedCount >= pendingCards.length) return;
  const card = pendingCards[revealedCount];
  const quantity = Number(collection[card.id]) || 0;
  const isNew = quantity === 0;
  collection[card.id] = quantity + 1;
  const shopCoinReward = getShopCoinsForReveal(card, collection[card.id]);
  if (shopCoinReward > 0) {
    shopState.coins = Math.min(Number.MAX_SAFE_INTEGER / 2, shopState.coins + shopCoinReward);
  }
  saveCollection();
  if (shopCoinReward > 0) saveShopState();
  const cardMarkupOptions = {
    reveal: true,
    newIds: isNew ? new Set([card.id]) : new Set()
  };
  document.querySelector("#pack-results").children[revealedCount].outerHTML = cardMarkup(card, revealedCount, cardMarkupOptions);
  revealedCount += 1;
  savePendingPack();
  document.querySelectorAll(`#pack-results [data-card-id="${card.id}"]`).forEach((copy) => {
    const stars = copy.querySelector(".card-stars");
    if (stars) stars.outerHTML = cardStarsMarkup(card);
  });
  renderWallet();
  renderCollection();
  document.querySelector("#reveal-progress").textContent = `${revealedCount} / ${pendingCards.length} cartes découvertes`;
  if (shopCoinReward > 0) {
    showToast(`+${formatShopCoins(shopCoinReward)} pièce${shopCoinReward > 1 ? "s" : ""} boutique`);
  }

  const revealButton = document.querySelector("#reveal-next");
  if (revealedCount === pendingCards.length) {
    revealButton.classList.add("hidden");
    document.querySelector("#open-pack").disabled = false;
    document.querySelector("#empty-open-pack").disabled = false;
  } else {
    revealButton.innerHTML = `<span>✧</span> Révéler la carte ${revealedCount + 1} <span class="button-arrow">↗</span>`;
  }
}

function showView(viewName) {
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.toggle("active", tab.dataset.view === viewName));
  document.querySelectorAll(".view").forEach((view) => view.classList.toggle("active", view.id === `${viewName}-view`));
  if (viewName === "collection") {
    document.querySelector("#collection-content").classList.remove("hidden");
    document.querySelector("#card-detail").classList.add("hidden");
    selectedCardId = null;
    renderFilters();
    renderCollection();
  }
  if (viewName === "shop") renderShop();
  if (viewName === "minigame") renderHangman();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function normalizeHangmanLetter(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleUpperCase("fr");
}

function getRarestHangmanCard(character) {
  return character.cards
    .filter((card) => card.rarity !== "silver" && card.rarity !== "gold")
    .reduce(
      (rarest, card) =>
        !rarest || rarityOrder.get(card.rarity) > rarityOrder.get(rarest.rarity) ? card : rarest,
      null
    );
}

function startHangmanGame() {
  if (!hangmanCharacters.length) {
    showToast("Aucun personnage n'est disponible pour le pendu.");
    return;
  }
  let candidates = hangmanCharacters;
  if (hangmanGame && hangmanCharacters.length > 1) {
    candidates = hangmanCharacters.filter((character) => character.key !== hangmanGame.character.key);
  }
  const character = candidates[Math.floor(Math.random() * candidates.length)];
  hangmanGame = {
    character,
    guessedLetters: new Set(),
    wrongGuesses: 0,
    status: "playing",
    rewarded: false
  };
  renderHangman();
}

function awardHangmanWin() {
  if (!hangmanGame || hangmanGame.rewarded) return;
  hangmanGame.rewarded = true;
  shopState.coins = Math.min(Number.MAX_SAFE_INTEGER / 2, shopState.coins + 10);
  blueCoins = Math.min(Number.MAX_SAFE_INTEGER, blueCoins + 15);
  saveShopState();
  saveEconomy();
  renderShop();
  renderWallet();
}

function renderHangman() {
  const game = hangmanGame;
  const isPlaying = !!game && game.status === "playing";
  const isWon = !!game && game.status === "won";
  const isFinished = !!game && !isPlaying;
  const word = document.querySelector("#hangman-word");
  word.replaceChildren();

  if (game) {
    for (const character of Array.from(game.character.name)) {
      const letter = normalizeHangmanLetter(character);
      const isLetter = /^[A-Z]$/.test(letter);
      const isRevealed = !isLetter || game.status !== "playing" || game.guessedLetters.has(letter);
      const span = document.createElement("span");
      span.className = `hangman-character ${isLetter ? "letter" : "separator"}`;
      if (isRevealed) span.classList.add("revealed");
      span.textContent = isLetter
        ? isRevealed ? character : ""
        : character === " " ? "\u00a0" : character;
      span.setAttribute("aria-hidden", "true");
      word.appendChild(span);
    }
  }
  word.setAttribute(
    "aria-label",
    isFinished ? `Réponse : ${game.character.name}` : "Nom du personnage à deviner"
  );

  document.querySelector("#hangman-status").textContent = !game
    ? "Prêt à jouer ?"
    : isPlaying
      ? "À toi de jouer !"
      : isWon
        ? "Bravo, tu as trouvé le personnage !"
        : "La partie est terminée.";
  document.querySelector("#hangman-feedback").textContent = !game
    ? "Chaque victoire rapporte 10 pièces boutique et 15 pièces bleues."
    : isPlaying
      ? "Choisis une lettre pour découvrir le nom."
      : isWon
        ? "Récompense ajoutée : 10 pièces boutique et 15 pièces bleues."
        : `Le personnage était ${game.character.name}.`;
  document.querySelector("#hangman-error-count").textContent =
    `Erreurs : ${game ? game.wrongGuesses : 0} / 6`;

  document.querySelectorAll(".hangman-part").forEach((part) => {
    part.classList.toggle("visible", !!game && game.wrongGuesses >= Number(part.dataset.error));
  });

  const letters = document.querySelector("#hangman-letters");
  letters.classList.toggle("hidden", !isPlaying);
  letters.innerHTML = isPlaying
    ? Array.from(hangmanAlphabet, (letter) => `
        <button class="hangman-letter-button" type="button" data-hangman-letter="${letter}"
          aria-label="Choisir la lettre ${letter}" ${game.guessedLetters.has(letter) ? "disabled" : ""}>${letter}</button>
      `).join("")
    : "";
  document.querySelector("#hangman-start").classList.toggle("hidden", !!game);
  document.querySelector("#hangman-replay").classList.toggle("hidden", !isFinished);

  const reward = document.querySelector("#hangman-reward");
  reward.replaceChildren();
  reward.classList.toggle("hidden", !isWon);
  if (isWon) {
    const card = getRarestHangmanCard(game.character);
    const title = document.createElement("p");
    title.className = "hangman-reward-title";
    if (!card) {
      title.textContent = "Aucune carte disponible hors des raretés Argent et Or.";
      reward.appendChild(title);
    } else {
      const rarity = rarityById[card.rarity];
      title.textContent = "Carte la plus rare de ce personnage";
      const image = document.createElement("img");
      image.className = "hangman-reward-image";
      image.src = card.image;
      image.alt = card.name;
      const caption = document.createElement("p");
      caption.className = `hangman-reward-caption ${card.rarity}`;
      caption.textContent = `${card.name} · ${rarity.name}`;
      reward.append(title, image, caption);
    }
  }
}

document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => showView(tab.dataset.view)));
document.querySelector("#open-pack").addEventListener("click", openPack);
document.querySelector("#reveal-next").addEventListener("click", revealNextCard);
document.querySelector("#empty-open-pack").addEventListener("click", () => {
  showView("summon");
  openPack();
});
document.querySelector("#close-results").addEventListener("click", () => {
  document.querySelector("#results-section").classList.add("hidden");
  document.querySelector(".hero").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("#rarity-filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  renderFilters();
  renderCollection();
});
document.querySelector("#collection-search").addEventListener("input", (event) => {
  collectionSearch = event.target.value;
  renderCollection();
});
document.querySelector("#collection-sort").addEventListener("change", (event) => {
  collectionSort = event.target.value;
  renderCollection();
});
document.querySelector("#shop-grid").addEventListener("click", (event) => {
  const tokenButton = event.target.closest("[data-shop-token]");
  if (tokenButton) {
    activateFreeShopToken();
    return;
  }
  const button = event.target.closest("[data-shop-offer]");
  if (button) purchaseShopOffer(Number(button.dataset.shopOffer));
});
document.querySelector("#shop-code-form").addEventListener("submit", (event) => {
  event.preventDefault();
  redeemShopCode(document.querySelector("#shop-code-input").value);
});
document.querySelector("#hangman-start").addEventListener("click", startHangmanGame);
document.querySelector("#hangman-replay").addEventListener("click", startHangmanGame);
document.querySelector("#hangman-letters").addEventListener("click", (event) => {
  if (!(event.target instanceof Element)) return;
  const button = event.target.closest("[data-hangman-letter]");
  if (button && !button.disabled) guessHangmanLetter(button.dataset.hangmanLetter);
});
document.addEventListener("keydown", (event) => {
  if (!document.querySelector("#minigame-view").classList.contains("active") ||
      !hangmanGame || hangmanGame.status !== "playing" ||
      event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.target instanceof HTMLElement &&
      (event.target.isContentEditable || event.target.closest("input, textarea, select"))) return;
  const letter = normalizeHangmanLetter(event.key);
  if (!/^[A-Z]$/.test(letter)) return;
  event.preventDefault();
  guessHangmanLetter(letter);
});

document.querySelector("#collection-grid").addEventListener("click", (event) => {
  const cardElement = event.target.closest("[data-card-id]");
  if (cardElement) openCardDetails(cardElement.dataset.cardId);
});
document.querySelector("#collection-grid").addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const cardElement = event.target.closest('[role="button"][data-card-id]');
  if (!cardElement) return;
  event.preventDefault();
  openCardDetails(cardElement.dataset.cardId);
});
document.querySelector("#detail-back").addEventListener("click", () => showView("collection"));
document.querySelector(".detail-tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-detail-tab]");
  if (!tab) return;
  selectedDetailTab = tab.dataset.detailTab;
  renderCardDetail();
});
document.querySelector("#style-level-list").addEventListener("click", (event) => {
  const styleButton = event.target.closest("[data-style-level]");
  if (!styleButton || styleButton.disabled) return;
  purchaseStyle(Number(styleButton.dataset.styleLevel));
});

function guessHangmanLetter(value) {
  if (!hangmanGame || hangmanGame.status !== "playing") return;
  const letter = normalizeHangmanLetter(value);
  if (!/^[A-Z]$/.test(letter) || hangmanGame.guessedLetters.has(letter)) return;
  hangmanGame.guessedLetters.add(letter);
  const answerLetters = Array.from(hangmanGame.character.name, normalizeHangmanLetter)
    .filter((character) => /^[A-Z]$/.test(character));
  if (!answerLetters.includes(letter)) hangmanGame.wrongGuesses += 1;
  if (answerLetters.every((character) => hangmanGame.guessedLetters.has(character))) {
    hangmanGame.status = "won";
    awardHangmanWin();
  } else if (hangmanGame.wrongGuesses >= 6) {
    hangmanGame.status = "lost";
  }
  renderHangman();
}

window.addEventListener("pagehide", saveProgress);
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") saveProgress();
});

renderFilters();
renderCollection();
renderPityProgress();
renderWallet();
renderShop();
renderHangman();
saveShopState();
window.setInterval(updateShopTimer, 1000);
restorePendingPack();
