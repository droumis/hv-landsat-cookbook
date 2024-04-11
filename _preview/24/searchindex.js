Search.setIndex({"docnames": ["README", "notebooks/0.0_Intro_Landsat", "notebooks/1.0_Data_Ingestion-Geospatial", "notebooks/1.1_Data_Ingestion-General", "notebooks/2.0_Spectral_Clustering_PC"], "filenames": ["README.md", "notebooks/0.0_Intro_Landsat.ipynb", "notebooks/1.0_Data_Ingestion-Geospatial.ipynb", "notebooks/1.1_Data_Ingestion-General.ipynb", "notebooks/2.0_Spectral_Clustering_PC.ipynb"], "titles": ["Landsat ML Cookbook", "Start Here - Intro to Landsat Data", "Data Ingestion - Geospatial-Specific Tooling", "Data Ingestion - General Purpose Tooling", "Spectral Clustering"], "terms": {"thi": [0, 1, 2, 3, 4], "project": [0, 2, 3], "pythia": 0, "cover": [0, 2, 4], "essenti": [0, 4], "materi": 0, "work": [0, 2, 3, 4], "data": 0, "context": [0, 1, 4], "learn": [0, 1, 2, 3, 4], "onc": [0, 2, 3, 4], "you": [0, 1, 2, 3, 4], "complet": [0, 1], "have": [0, 1, 2, 3, 4], "skill": 0, "access": [0, 1], "resampl": 0, "regrid": 0, "reshap": 0, "rescal": [0, 3, 4], "satellit": [0, 1, 3], "well": 0, "appli": [0, 1, 2], "also": [0, 2], "how": [0, 3], "interact": [0, 2, 3], "visual": [0, 1], "everi": [0, 2], "step": [0, 2, 3, 4], "process": [0, 1, 4], "demetri": [0, 1, 2, 3, 4], "roumi": [0, 1, 2, 3, 4], "andrew": [0, 3], "huang": [0, 3], "wa": [0, 1, 2, 3, 4], "initi": 0, "inspir": 0, "earthml": 0, "see": [0, 2, 4], "list": [0, 2], "here": [0, 3, 4], "i": [0, 1, 2, 3, 4], "broken": 0, "up": [0, 1, 2, 3, 4], "two": [0, 1], "main": [0, 4], "section": [0, 3], "The": [0, 1, 2, 3, 4], "content": 0, "includ": [0, 3], "start": [0, 2, 3, 4], "introduct": [0, 1, 3], "ingest": [0, 1, 4], "geospati": [0, 4], "specif": [0, 1, 4], "tool": [0, 4], "demonstr": [0, 4], "method": [0, 2, 3, 4], "load": [0, 1, 2], "from": [0, 1, 2, 3, 4], "microsoft": [0, 1, 2, 3, 4], "": 0, "planetari": [0, 1, 2, 4], "comput": [0, 1, 2, 4], "platform": [0, 1, 2, 4], "pystac": [0, 2, 4], "odc": [0, 2, 4], "gener": [0, 1, 2], "purpos": 0, "approach": [0, 2, 3, 4], "domain": 0, "independ": 0, "us": [0, 1, 2, 3, 4], "intak": [0, 3], "spectral": [0, 1, 3], "cluster": [0, 3], "pixel": [0, 2, 4], "compar": [0, 1, 4], "result": [0, 4], "across": [0, 1, 3, 4], "time": [0, 1, 2, 3], "can": [0, 2, 3, 4], "either": [0, 4], "local": [0, 2, 4], "simplest": 0, "wai": [0, 2, 3, 4], "jupyt": [0, 4], "through": [0, 1, 3, 4], "which": [0, 1, 2, 3, 4], "enabl": [0, 3], "execut": 0, "book": [0, 2], "cloud": [0, 2, 3], "detail": [0, 1, 4], "ar": [0, 1, 2, 3, 4], "import": [0, 1], "now": [0, 2, 3, 4], "all": [0, 2, 4], "need": [0, 2, 3, 4], "know": [0, 2, 3], "launch": [0, 1], "chapter": [0, 2], "via": [0, 2], "simpli": [0, 3], "navig": 0, "mous": 0, "top": [0, 2, 3], "right": 0, "corner": 0, "view": [0, 2, 3], "click": 0, "rocket": 0, "ship": 0, "icon": 0, "figur": 0, "below": [0, 4], "sure": 0, "select": [0, 4], "after": [0, 3], "moment": 0, "should": [0, 2], "present": [0, 3], "e": [0, 2, 4], "ll": [0, 1, 2, 3, 4], "abl": 0, "even": 0, "chang": [0, 1, 4], "program": [0, 1], "code": [0, 2, 3], "cell": [0, 2, 3, 4], "output": [0, 3, 4], "first": [0, 1, 2, 3, 4], "until": [0, 2], "them": [0, 3], "press": 0, "shift": 0, "enter": 0, "live": 0, "describ": 0, "get": [0, 2, 3, 4], "If": [0, 3], "interest": [0, 1, 2, 3], "follow": [0, 2, 3], "clone": 0, "repositori": 0, "git": 0, "http": [0, 2, 3, 4], "github": [0, 2, 4], "com": [0, 2, 3, 4], "projectpythia": 0, "move": [0, 1], "directori": [0, 4], "cd": 0, "creat": [0, 2, 4], "activ": [0, 4], "conda": 0, "environ": [0, 4], "yml": 0, "file": [0, 2, 3], "env": [0, 2, 3, 4], "f": [0, 2, 4], "jupyterlab": 0, "lab": 0, "In": [1, 2, 3, 4], "cookbook": [1, 2, 3, 4], "analyz": [1, 3], "machin": [1, 2, 3, 4], "workflow": [1, 2, 3, 4], "particular": [1, 3], "notebook": [1, 2, 3, 4], "provid": [1, 2, 3, 4], "an": [1, 2, 3, 4], "build": 1, "our": [1, 2, 3, 4], "intuit": 1, "we": [1, 2, 3, 4], "toward": 1, "analysi": [1, 2, 4], "5": [1, 2, 3, 4], "minut": [1, 2, 3, 4], "origin": [1, 2, 4], "come": 1, "longest": 1, "record": 1, "moder": 1, "resolut": [1, 2], "multispectr": [1, 3], "earth": [1, 2, 3], "surfac": [1, 2, 3], "ha": [1, 2, 4], "sever": [1, 2], "differ": [1, 2, 4], "span": [1, 2], "mani": [1, 2], "year": 1, "design": [1, 3], "1": [1, 2, 3, 4], "9": [1, 2, 3], "when": [1, 2, 4], "keep": [1, 4], "mind": [1, 4], "coupl": 1, "kei": [1, 3], "point": [1, 2, 3, 4], "instrument": [1, 2, 3], "mission": [1, 2, 3, 4], "vari": 1, "certain": [1, 4], "aspect": [1, 2], "second": [1, 4], "avail": [1, 2, 3, 4], "multipl": [1, 3, 4], "usg": [1, 2, 3], "nasa": [1, 3], "googl": 1, "aw": 1, "etc": 1, "mai": [1, 2, 4], "level": [1, 2, 3, 4], "For": [1, 3], "dataset": 1, "end": 1, "crucial": [1, 3], "review": 1, "relev": [1, 3, 4], "inform": [1, 2, 4], "understand": [1, 3], "especi": [1, 2, 3], "common": [1, 4], "wavelength": [1, 4], "band": [1, 2, 4], "captur": 1, "imag": [1, 2, 3, 4], "same": [1, 4], "area": [1, 2, 3, 4], "togeth": [1, 2], "much": 1, "more": [1, 2, 3], "about": [1, 2], "featur": [1, 2, 4], "ground": 1, "than": [1, 2, 4], "singl": [1, 2, 4], "alon": 1, "u": [1, 2, 3, 4], "stack": [1, 2, 3, 4], "each": [1, 3, 4], "spatial": [1, 2], "region": [1, 2, 4], "might": [1, 3, 4], "addition": 1, "whenev": 1, "look": [1, 2], "over": [1, 2], "addit": [1, 3], "dimens": [1, 2, 4], "exampl": [1, 2, 3, 4], "consid": [1, 2, 3, 4], "water": [1, 2, 4], "around": [1, 2], "lake": [1, 2, 4], "befor": [1, 2], "ani": [1, 3, 4], "good": [1, 2], "idea": 1, "give": 1, "make": [1, 4], "decis": 1, "form": 1, "pipelin": 1, "timelin": 1, "discov": 1, "earthsciencedata": 1, "org": [1, 2, 3, 4], "8": [1, 2, 3, 4], "banner": [1, 2, 3], "page": [1, 2, 4], "author": [1, 2, 3, 4], "circa": [1, 2, 3, 4], "jan": [1, 2, 4], "2023": [1, 2, 4], "task": 2, "often": [2, 3], "involv": 2, "lot": 2, "python": 2, "typic": [2, 3], "store": [2, 3], "memori": [2, 4], "simpl": [2, 3, 4], "numpi": [2, 4], "arrai": [2, 3, 4], "howev": [2, 3], "higher": 2, "contain": 2, "built": 2, "function": [2, 3], "multidimension": 2, "grid": [2, 4], "xarrai": [2, 3, 4], "out": [2, 4], "core": [2, 3, 4], "distribut": [2, 4], "dask": [2, 3, 4], "goal": [2, 3], "one": [2, 3, 4], "planteri": 2, "client": [2, 4], "becaus": 2, "thei": 2, "nice": 2, "api": [2, 3, 4], "criteria": 2, "datetim": [2, 4], "coverag": 2, "scienc": [2, 3], "remot": [2, 3], "server": 2, "too": 2, "larg": [2, 4], "download": 2, "therefor": 2, "focu": [2, 3], "primarili": 2, "small": 2, "portion": 2, "sourc": 2, "your": [2, 3, 4], "own": [2, 4], "depend": [2, 4], "onli": [2, 3, 4], "size": [2, 4], "locat": 2, "intend": 2, "so": [2, 3, 4], "altern": 2, "manag": [2, 3, 4], "concept": [2, 3, 4], "note": [2, 3, 4], "intro": [2, 3], "necessari": [2, 3, 4], "background": [2, 3, 4], "help": [2, 3, 4], "usag": [2, 4], "consult": 2, "panel": [2, 3], "guid": [2, 3], "10": [2, 3, 4], "panda": [2, 3, 4], "pd": [2, 4], "planetary_comput": [2, 3, 4], "pystac_cli": [2, 4], "xr": [2, 4], "extens": [2, 3, 4], "eo": [2, 4], "eoextens": [2, 4], "viz": [2, 3, 4], "hvplot": [2, 3, 4], "pn": [2, 3], "planetarycomput": [2, 3, 4], "v1": [2, 3, 4], "modifi": [2, 4], "sign_inplac": [2, 3, 4], "titl": [2, 4], "public": 2, "metadata": [2, 3, 4], "actual": [2, 4], "asset": [2, 3, 4], "privat": 2, "azur": 2, "blob": 2, "storag": 2, "requir": 2, "authent": 2, "keyword": 2, "manual": 2, "sign": [2, 3], "item": [2, 4], "otherwis": 2, "d": 2, "error": 2, "try": [2, 4], "let": [2, 4], "sai": 2, "want": [2, 3, 4], "run": [2, 4], "period": [2, 3], "fit": [2, 4], "find": [2, 4], "name": [2, 3, 4], "brows": 2, "collect": [2, 4], "just": [2, 3, 4], "all_collect": 2, "id": [2, 3, 4], "get_collect": 2, "landsat_collect": 2, "c2": [2, 3, 4], "l2": [2, 3, 4], "l1": [2, 3], "stand": 2, "2": [2, 3, 4], "It": 2, "better": 2, "qualiti": [2, 3], "descript": [2, 3, 4], "direct": [2, 4], "succinct": 2, "comparison": [2, 4], "found": 2, "commun": 2, "post": 2, "verifi": 2, "paramet": [2, 3, 4], "alreadi": 2, "bound": 2, "box": 2, "coordin": [2, 3, 4], "don": 2, "t": [2, 4], "like": [2, 3, 4], "bboxfind": 2, "bbox": [2, 4], "118": [2, 4], "89": [2, 4], "38": [2, 4], "54": [2, 4], "57": [2, 4], "84": [2, 3, 4], "nevada": [2, 4], "usa": [2, 4], "2017": [2, 4], "06": [2, 3, 4], "01": [2, 4], "09": [2, 4], "30": [2, 3, 4], "summer": [2, 4], "month": [2, 4], "specifi": [2, 3], "other": [2, 3, 4], "queri": [2, 3, 4], "max": 2, "percent": [2, 4], "cloudy_less_than": [2, 4], "cloud_cov": [2, 4], "lt": [2, 3, 4], "item_collect": [2, 4], "print": [2, 3, 4], "return": [2, 4], "len": [2, 4], "item_id": 2, "enumer": [2, 4], "3": [2, 3, 4], "0": [2, 3, 4], "lc08_l2sp_042033_20170718_02_t1": [2, 4], "lc08_l2sp_042033_20170702_02_t1": [2, 4], "lc08_l2sp_042033_20170616_02_t1": [2, 4], "were": 2, "three": 2, "taken": 2, "dure": 2, "less": 2, "would": [2, 4], "check": [2, 3, 4], "render": [2, 4], "thumbnail": [2, 3], "without": 2, "full": 2, "applic": [2, 3], "librari": [2, 3], "displai": [2, 4], "png": 2, "pre": 2, "tile": [2, 4], "beyond": 2, "item_sel": 2, "widget": 2, "valu": [2, 3, 4], "option": [2, 3, 4], "def": 2, "get_preview": 2, "rendered_preview": [2, 3], "href": 2, "height": [2, 3, 4], "300": 2, "row": 2, "bind": 2, "selected_item": 2, "type": [2, 4], "stac_vers": 2, "properti": [2, 4], "gsd": 2, "2022": 2, "05": [2, 3, 4], "06t17": 2, "46": 2, "34": 2, "110946z": 2, "sci": 2, "doi": 2, "5066": 2, "p9ogbgm6": 2, "07": [2, 4], "02t18": [2, 4], "33": [2, 4], "200763z": 2, "proj": [2, 4], "epsg": [2, 3, 4], "32611": [2, 4], "shape": [2, 3, 4], "7941": 2, "7811": 2, "oli": 2, "tir": 2, "53": 2, "transform": 2, "6": [2, 3, 4], "246285": 2, "4": [2, 3, 4], "4425915": 2, "off_nadir": 2, "wrs_row": 2, "033": 2, "scene_id": 2, "lc80420332017183lgn00": 2, "wrs_path": 2, "042": 2, "wrs_type": 2, "sun_azimuth": 2, "125": 2, "03739105": 2, "correct": [2, 3, 4], "l2sp": 2, "sun_elev": 2, "65": [2, 4], "85380157": 2, "cloud_cover_land": 2, "collection_numb": 2, "02": [2, 4], "collection_categori": 2, "t1": 2, "geometri": 2, "polygon": 2, "119": 2, "3738213": 2, "39": 2, "9539547": 2, "117": [2, 4], "2640708": 2, "560075": 2, "81941": 2, "37": 2, "8437474": 2, "8757946": 2, "2347701": 2, "link": 2, "rel": 2, "json": [2, 3], "parent": 2, "self": 2, "geo": [2, 3, 4], "cite": 2, "landsatlook": 2, "gov": [2, 3], "c2l2": 2, "sr": 2, "lc08_l2sp_042033_20170702_20200903_02_t1_sr": 2, "st": 2, "lc08_l2sp_042033_20170702_20200903_02_t1_st": 2, "7": [2, 3, 4], "map": [2, 4], "text": 2, "html": [2, 4], "qa": [2, 3], "landsateuwest": 2, "window": 2, "net": 2, "standard": 2, "lc08_l2sp_042033_20170702_20200903_02_t1": 2, "lc08_l2sp_042033_20170702_20200903_02_t1_st_qa": 2, "tif": 2, "2024": [2, 3], "04": [2, 4], "10t01": 2, "3a42": 2, "3a51z": 2, "se": 2, "11t02": 2, "3a27": 2, "sp": 2, "rl": 2, "sv": 2, "2021": 2, "08": [2, 4], "c": [2, 4], "skoid": 2, "c85c15d6": 2, "d1ae": 2, "42d4": 2, "af60": 2, "e2ca0f81359b": 2, "sktid": 2, "72f988bf": 2, "86f1": 2, "41af": 2, "91ab": 2, "2d7cd011db47": 2, "skt": 2, "10t22": 2, "3a10": 2, "3a41z": 2, "ske": 2, "17t22": 2, "sk": 2, "b": 2, "skv": 2, "sig": 2, "frpoqzihee2aun3lhbybbn": 2, "2bt0qo2opqmtfhe7wlq": 2, "3d": 2, "tiff": 2, "geotiff": [2, 3], "profil": 2, "optim": [2, 3], "temperatur": [2, 3], "assess": [2, 3], "st_qa": 2, "product": [2, 3], "raster": 2, "unit": [2, 3, 4], "kelvin": 2, "scale": [2, 3, 4], "nodata": [2, 4], "9999": 2, "data_typ": [2, 3], "int16": 2, "spatial_resolut": 2, "role": 2, "ang": [2, 3], "lc08_l2sp_042033_20170702_20200903_02_t1_ang": 2, "txt": [2, 3], "plain": 2, "angl": 2, "coeffici": 2, "red": [2, 3, 4], "lc08_l2sp_042033_20170702_20200903_02_t1_sr_b4": 2, "sr_b4": 2, "reflect": [2, 3], "oli_b4": [2, 4], "center_wavelength": [2, 4], "full_width_half_max": [2, 4], "common_nam": [2, 4], "visibl": [2, 4], "75e": 2, "offset": 2, "uint16": [2, 3, 4], "blue": [2, 3, 4], "lc08_l2sp_042033_20170702_20200903_02_t1_sr_b2": 2, "sr_b2": 2, "oli_b2": [2, 4], "48": [2, 4], "drad": [2, 3], "lc08_l2sp_042033_20170702_20200903_02_t1_st_drad": 2, "downwel": 2, "radianc": [2, 3], "st_drad": 2, "watt": 2, "steradian": 2, "square_met": 2, "micromet": 2, "001": 2, "emi": [2, 3], "lc08_l2sp_042033_20170702_20200903_02_t1_st_emi": 2, "emiss": 2, "st_emi": 2, "0001": 2, "emsd": [2, 3], "lc08_l2sp_042033_20170702_20200903_02_t1_st_emsd": 2, "deviat": 2, "st_emsd": 2, "trad": [2, 3], "lc08_l2sp_042033_20170702_20200903_02_t1_st_trad": 2, "thermal": [2, 3], "st_trad": 2, "urad": [2, 3], "lc08_l2sp_042033_20170702_20200903_02_t1_st_urad": 2, "upwel": 2, "st_urad": 2, "atran": [2, 3], "lc08_l2sp_042033_20170702_20200903_02_t1_st_atran": 2, "atmospher": [2, 3], "transmitt": 2, "st_atran": 2, "cdist": [2, 3], "lc08_l2sp_042033_20170702_20200903_02_t1_st_cdist": 2, "distanc": 2, "st_cdist": 2, "kilomet": 2, "green": [2, 3, 4], "lc08_l2sp_042033_20170702_20200903_02_t1_sr_b3": 2, "sr_b3": 2, "oli_b3": [2, 4], "56": [2, 4], "nir08": [2, 3, 4], "lc08_l2sp_042033_20170702_20200903_02_t1_sr_b5": 2, "Near": [2, 4], "infrar": [2, 3, 4], "sr_b5": 2, "oli_b5": [2, 4], "87": [2, 4], "03": [2, 4], "lwir11": [2, 3, 4], "lc08_l2sp_042033_20170702_20200903_02_t1_st_b10": 2, "st_b10": 2, "100": 2, "tirs_b10": [2, 4], "long": [2, 3, 4], "wave": [2, 4], "59": [2, 4], "00341802": 2, "149": 2, "swir16": [2, 3, 4], "lc08_l2sp_042033_20170702_20200903_02_t1_sr_b6": 2, "short": [2, 4], "sr_b6": 2, "oli_b6": [2, 4], "61": [2, 4], "swir22": [2, 3, 4], "lc08_l2sp_042033_20170702_20200903_02_t1_sr_b7": 2, "sr_b7": 2, "oli_b7": [2, 4], "19": [2, 4], "coastal": [2, 3, 4], "lc08_l2sp_042033_20170702_20200903_02_t1_sr_b1": 2, "aerosol": [2, 4], "sr_b1": 2, "oli_b1": [2, 4], "44": [2, 4], "mtl": [2, 3], "lc08_l2sp_042033_20170702_20200903_02_t1_mtl": 2, "xml": [2, 3], "qa_pixel": [2, 3], "lc08_l2sp_042033_20170702_20200903_02_t1_qa_pixel": 2, "classif": 2, "bitfield": 2, "12": [2, 3, 4], "fill": 2, "length": [2, 3, 4], "class": [2, 3], "not_fil": 2, "dilated_cloud": 2, "not_dil": 2, "dilat": 2, "cirru": 2, "not_cirru": 2, "confid": 2, "high": [2, 3], "mask": 2, "not_cloud": 2, "cloud_shadow": 2, "not_shadow": 2, "shadow": 2, "snow": 2, "not_snow": 2, "ic": 2, "clear": 2, "not_clear": 2, "bit": 2, "not_wat": 2, "land": [2, 3], "cloud_confid": 2, "not_set": 2, "No": 2, "low": 2, "medium": 2, "cloud_shadow_confid": 2, "reserv": 2, "snow_confid": 2, "11": [2, 3, 4], "cirrus_confid": 2, "14": [2, 3, 4], "index": [2, 3, 4], "qa_radsat": [2, 3], "lc08_l2sp_042033_20170702_20200903_02_t1_qa_radsat": 2, "radiometr": 2, "satur": 2, "terrain": 2, "occlus": 2, "band1": 2, "not_satur": 2, "band2": 2, "band3": 2, "band4": 2, "band5": 2, "band6": 2, "band7": 2, "band9": 2, "not_occlud": 2, "occlud": 2, "sensor": [2, 3], "due": 2, "interven": 2, "qa_aerosol": [2, 3], "lc08_l2sp_042033_20170702_20200903_02_t1_sr_qa_aerosol": 2, "sr_qa_aerosol": 2, "uint8": 2, "retriev": [2, 3], "not_valid": 2, "valid": 2, "interpol": 2, "not_interpol": 2, "climatologi": 2, "tilejson": [2, 3], "color_formula": 2, "gamma": [2, 4], "rgb": 2, "2c": 2, "sigmoid": 2, "15": [2, 4], "55": 2, "format": [2, 3], "default": 2, "96969034": 2, "80133495": 2, "22029446": 2, "98317505": 2, "stac_extens": 2, "io": 2, "schema": 2, "scientif": 2, "proced": 2, "veri": 2, "amount": 2, "quickli": 2, "hand": 2, "subset": 2, "_": [2, 4], "append": [2, 4], "extra_field": [2, 4], "except": [2, 4], "pass": [2, 4], "cols_ord": [2, 4], "datafram": [2, 3, 4], "from_dict": [2, 4], "90": [2, 4], "20": [2, 3, 4], "Then": 2, "few": [2, 3], "bands_of_interest": 2, "final": [2, 3, 4], "lazili": 2, "packag": [2, 3, 4], "call": [2, 3], "allow": [2, 3], "chunk": [2, 4], "argument": 2, "delai": 2, "forc": 2, "stac_load": [2, 4], "isel": [2, 4], "gt": [2, 3, 4], "y": [2, 3, 4], "1128": [2, 4], "x": [2, 3, 4], "950": [2, 4], "float64": [2, 3, 4], "301e": [2, 4], "267e": [2, 4], "353e": [2, 4], "637e": [2, 4], "638e": [2, 4], "spatial_ref": [2, 3, 4], "int32": [2, 4], "datetime64": [2, 4], "n": [2, 3, 4], "200763": [2, 4], "variabl": 2, "chunksiz": [2, 4], "meta": [2, 4], "np": [2, 4], "ndarrai": [2, 4], "datasetdimens": 2, "1128x": [2, 4], "950coordin": 2, "float644": [2, 3, 4], "06unit": [2, 4], "metreresolut": [2, 4], "0cr": [2, 4], "32611arrai": [2, 4], "4300710": [2, 4], "4300680": [2, 4], "4300650": [2, 4], "4266960": [2, 4], "4266930": [2, 4], "4266900": [2, 4], "float643": [2, 4], "05unit": [2, 4], "335280": [2, 4], "335310": [2, 4], "335340": [2, 4], "363690": [2, 4], "363720": [2, 4], "363750": [2, 4], "int3232611spatial_ref": [2, 4], "projcr": [2, 4], "quot": [2, 3, 4], "wg": [2, 3, 4], "utm": [2, 3, 4], "zone": [2, 3, 4], "11n": [2, 4], "basegeogcr": [2, 4], "ensembl": [2, 4], "world": [2, 3, 4], "geodet": [2, 3, 4], "system": [2, 3, 4], "1984": [2, 4], "member": [2, 4], "transit": [2, 4], "g730": [2, 4], "g873": [2, 4], "g1150": [2, 4], "g1674": [2, 4], "g1762": [2, 4], "g2139": [2, 4], "ellipsoid": [2, 4], "6378137": [2, 3, 4], "298": [2, 3, 4], "257223563": [2, 3, 4], "lengthunit": [2, 4], "metr": [2, 3, 4], "ensembleaccuraci": [2, 4], "primem": [2, 3, 4], "greenwich": [2, 3, 4], "angleunit": [2, 4], "degre": [2, 3, 4], "0174532925199433": [2, 3, 4], "4326": [2, 3, 4], "convers": [2, 3, 4], "transvers": [2, 4], "mercat": [2, 4], "9807": [2, 4], "latitud": [2, 4], "natur": [2, 4], "8801": [2, 4], "longitud": [2, 4], "8802": [2, 4], "factor": [2, 4], "9996": [2, 3, 4], "scaleunit": [2, 4], "uniti": [2, 4], "8805": [2, 4], "fals": [2, 4], "east": [2, 3, 4], "500000": [2, 3, 4], "8806": [2, 4], "north": [2, 3, 4], "8807": [2, 4], "cartesian": [2, 4], "axi": [2, 3, 4], "order": [2, 4], "scope": [2, 4], "engin": [2, 4], "survei": [2, 4], "topograph": [2, 4], "between": [2, 3, 4], "120": [2, 4], "w": [2, 4], "114": [2, 4], "northern": [2, 4], "hemispher": [2, 4], "equat": [2, 4], "onshor": [2, 4], "offshor": [2, 4], "canada": [2, 4], "alberta": [2, 4], "british": [2, 4], "columbia": [2, 4], "bc": [2, 4], "northwest": [2, 4], "territori": [2, 4], "nwt": [2, 4], "nunavut": [2, 4], "mexico": [2, 4], "state": [2, 4], "crs_wkt": [2, 4], "semi_major_axi": [2, 3, 4], "0semi_minor_axi": [2, 3, 4], "6356752": [2, 3, 4], "314245179inverse_flatten": [2, 3, 4], "257223563reference_ellipsoid_nam": [2, 3, 4], "84longitude_of_prime_meridian": [2, 3, 4], "0prime_meridian_nam": [2, 3, 4], "greenwichgeographic_crs_nam": [2, 3, 4], "84horizontal_datum_nam": [2, 3, 4], "ensembleprojected_crs_nam": [2, 4], "11ngrid_mapping_nam": [2, 4], "transverse_mercatorlatitude_of_projection_origin": [2, 3, 4], "0longitude_of_central_meridian": [2, 3, 4], "0false_east": [2, 3, 4], "0false_north": [2, 3, 4], "0scale_factor_at_central_meridian": [2, 3, 4], "9996geotransform": [2, 4], "335265": [2, 4], "4300725": [2, 4], "0arrai": [2, 3, 4], "dtype": [2, 3, 4], "200763arrai": [2, 4], "x27": [2, 3, 4], "200763000": [2, 4], "uint16dask": 2, "byte": [2, 4], "mib": [2, 4], "graph": [2, 4], "layer": [2, 4], "ypandasindexpandasindex": [2, 3, 4], "float64index": [2, 3, 4], "4300620": [2, 4], "4300590": [2, 4], "4300560": [2, 4], "4300530": [2, 4], "4300500": [2, 4], "4300470": [2, 4], "4300440": [2, 4], "4267170": [2, 4], "4267140": [2, 4], "4267110": [2, 4], "4267080": [2, 4], "4267050": [2, 4], "4267020": [2, 4], "4266990": [2, 4], "xpandasindexpandasindex": [2, 3, 4], "335370": [2, 4], "335400": [2, 4], "335430": [2, 4], "335460": [2, 4], "335490": [2, 4], "335520": [2, 4], "335550": [2, 4], "363480": [2, 4], "363510": [2, 4], "363540": [2, 4], "363570": [2, 4], "363600": [2, 4], "363630": [2, 4], "363660": [2, 4], "combin": [2, 4], "dataarrai": [2, 3, 4], "new": [2, 3, 4], "da": 2, "to_arrai": [2, 4], "dim": [2, 3, 4], "14691": 2, "14914": 2, "14988": 2, "16283": 2, "16292": 2, "16316": 2, "14655": 2, "14859": 2, "14969": 2, "16272": 2, "16185": 2, "16079": 2, "14531": 2, "14699": 2, "14972": 2, "15318": 2, "15526": 2, "14734": 2, "13804": 2, "13561": 2, "13601": 2, "18311": 2, "18202": 2, "17625": 2, "13857": 2, "13828": 2, "13858": 2, "19400": 2, "18942": 2, "18551": 2, "13840": 2, "13786": 2, "13867": 2, "17873": 2, "17917": 2, "18453": 2, "13233": 2, "13402": 2, "13565": 2, "14553": 2, "14658": 2, "14657": 2, "13291": 2, "13428": 2, "13585": 2, "14590": 2, "14478": 2, "14550": 2, "13122": 2, "13287": 2, "13987": 2, "14220": 2, "13571": 2, "12720": 2, "12552": 2, "12468": 2, "16580": 2, "16411": 2, "15899": 2, "12704": 2, "12644": 2, "12658": 2, "17351": 2, "16853": 2, "16505": 2, "12647": 2, "12620": 2, "12698": 2, "15990": 2, "16211": 2, "16686": 2, "11572": 2, "11629": 2, "11723": 2, "12857": 2, "12918": 2, "12946": 2, "11588": 2, "11655": 2, "11721": 2, "12848": 2, "12792": 2, "12715": 2, "11510": 2, "11608": 2, "11781": 2, "12371": 2, "12453": 2, "12053": 2, "11195": 2, "11104": 2, "11045": 2, "14182": 2, "14031": 2, "13716": 2, "11125": 2, "11061": 2, "11106": 2, "14652": 2, "14284": 2, "14062": 2, "11059": 2, "11050": 2, "11134": 2, "13756": 2, "13865": 2, "14209": 2, "object": [2, 3, 4], "dataarrayband": [2, 3, 4], "3y": [2, 3], "95014691": 2, "14928": 2, "14568": 2, "14848": 2, "13910": 2, "13752": 2, "14209arrai": 2, "bandpandasindexpandasindex": [2, 3, 4], "raw": [2, 4], "sens": [2, 3], "thing": [2, 4], "proceed": 2, "accordingli": 2, "As": [2, 3, 4], "color": [2, 4], "plot": [2, 3, 4], "imshow": [2, 3], "robust": [2, 3], "true": [2, 4], "outsid": 2, "rang": [2, 3, 4], "matplotlib": [2, 3], "axesimag": [2, 3], "0x7f139c2d1420": 2, "inividu": 2, "cmap": [2, 4], "viridi": 2, "seper": 2, "column": [2, 3], "expand": 2, "col": 2, "datashad": [2, 4], "anoth": [2, 4], "holoviz": [2, 3], "2d": 2, "histogram": 2, "where": [2, 3, 4], "count": 2, "fall": 2, "screen": 2, "caus": [2, 4], "issu": 2, "attempt": 2, "browser": 2, "xaxi": 2, "yaxi": 2, "colorbar": [2, 4], "home": [2, 3, 4], "runner": [2, 3, 4], "miniconda3": [2, 3, 4], "dev": [2, 3, 4], "lib": [2, 3, 4], "python3": [2, 3, 4], "site": [2, 3, 4], "_pyarrow_compat": [2, 3, 4], "py": [2, 3, 4], "17": [2, 3, 4], "futurewarn": [2, 3, 4], "minim": [2, 3, 4], "version": [2, 3, 4], "pyarrow": [2, 3, 4], "soon": [2, 3, 4], "increas": [2, 3, 4], "pleas": [2, 3, 4], "upgrad": [2, 3, 4], "warn": [2, 3, 4], "geopanda": [2, 3, 4], "_compat": [2, 3, 4], "153": [2, 3, 4], "userwarn": [2, 3, 4], "capi": [2, 3, 4], "incompat": [2, 3, 4], "pygeo": [2, 3, 4], "compil": [2, 3, 4], "16": [2, 3, 4], "both": [2, 3, 4], "slow": [2, 3, 4], "set_use_pygeo": [2, 3, 4], "zoom": 2, "automat": 2, "critic": 2, "attr": [2, 4], "22": [2, 3, 4], "t1xarrai": 2, "30creat": 2, "110946zsci": 2, "p9ogbgm6datetim": 2, "200763zplatform": 2, "8proj": 2, "32611proj": 2, "2instrument": 2, "53proj": 2, "0landsat": 2, "033landsat": 2, "lc80420332017183lgn00landsat": 2, "042landsat": 2, "2view": 2, "03739105landsat": 2, "l2spview": 2, "85380157landsat": 2, "53landsat": 2, "02landsat": 2, "notic": [2, 4], "dropdown": 2, "meter": 2, "commonli": 2, "copi": [2, 4], "further": 2, "anyth": 2, "referenc": 2, "onlin": 2, "geograph": [2, 3], "overlai": 2, "align": 2, "alpha": [2, 4], "esri": [2, 4], "xlabel": [2, 4], "ylabel": [2, 4], "adapt": [2, 3, 4], "ensur": [2, 3], "match": [2, 3], "expect": [2, 3], "proce": [2, 3], "explor": 2, "guidanc": [2, 3], "part": [2, 3, 4], "announc": 2, "azavea": 2, "special": 3, "discuss": [3, 4], "previou": 3, "suit": 3, "feel": 3, "free": 3, "re": [3, 4], "seek": 3, "wider": 3, "welcom": 3, "v2": 3, "while": [3, 4], "offer": 3, "broader": 3, "potenti": [3, 4], "flexibl": 3, "multimod": 3, "character": 3, "unifi": 3, "interfac": 3, "abstract": 3, "user": [3, 4], "consist": 3, "regardless": 3, "underli": 3, "dynam": 3, "shareabl": 3, "facilit": 3, "creation": 3, "share": 3, "control": 3, "updat": 3, "maintain": 3, "its": 3, "plugin": 3, "variou": 3, "simplifi": [3, 4], "enhanc": 3, "modular": 3, "reproduc": 3, "landsat": [3, 4], "quickstart": 3, "pprint": 3, "To": [3, 4], "stac": [3, 4], "url": 3, "ask": 3, "recommend": 3, "some": [3, 4], "suitabl": 3, "datatyp": 3, "jsonfil": 3, "stacjson": 3, "handl": 3, "catalogapi": 3, "tiledservic": 3, "identifi": [3, 4], "possibl": 3, "choos": 3, "best": 3, "storage_opt": 3, "none": [3, 4], "repres": 3, "streamlin": 3, "subsequ": 3, "oper": [3, 4], "With": [3, 4], "possible_read": 3, "staccatalogread": 3, "stackband": 3, "stacsearch": 3, "daskjson": 3, "filetextread": 3, "fileexistsread": 3, "filebyteread": 3, "not_import": 3, "polarsjson": 3, "rayjson": 3, "awkwardjson": 3, "duckjson": 3, "raybinari": 3, "interpret": 3, "effect": 3, "probabl": 3, "most": 3, "case": [3, 4], "signer": 3, "produc": 3, "entri": 3, "configur": 3, "word": 3, "stac_cat": 3, "data_descript": 3, "kwarg": 3, "lower": 3, "By": [3, 4], "close": 3, "desir": 3, "quantiz": 3, "calibr": 3, "digit": 3, "number": [3, 4], "dn": 3, "These": [3, 4], "www": 3, "toa": 3, "bright": 3, "global": 3, "archiv": 3, "nli": 3, "acquir": 3, "scanner": 3, "gsfc": 3, "onboard": 3, "juli": 3, "1972": 3, "januari": 3, "2013": 3, "cogeo": 3, "august": 3, "1982": 3, "themat": 3, "mapper": 3, "plu": 3, "etm": 3, "operat": 3, "spacecraft": 3, "chosen": 3, "directli": [3, 4], "sinc": [3, 4], "util": 3, "wrap": 3, "scrollabl": 3, "element": 3, "landsat_read": 3, "landsat_metadata": 3, "block": 3, "json_pan": 3, "pane": 3, "max_height": 3, "400": [3, 4], "sizing_mod": 3, "stretch_width": 3, "depth": 3, "theme": 3, "light": 3, "scrollable_output": 3, "scroll": 3, "style": 3, "lightgrei": 3, "nameerror": 3, "traceback": 3, "recent": 3, "last": 3, "line": 3, "defin": 3, "particularli": 3, "command": 3, "individu": 3, "geoparquet": 3, "effici": 3, "landsat_item": 3, "daskgeoparquet": 3, "dask_geopanda": 3, "geodatafram": 3, "tail": 3, "back": [3, 4], "compat": 3, "cat": 3, "output_inst": 3, "geodataframetostaccatalog": 3, "structur": 3, "correspond": 3, "set": [3, 4], "relat": 3, "organ": 3, "lc09_l2sp_098011_20240401_02_t1": 3, "lc09_l2sp_098012_20240401_02_t1": 3, "lc09_l2sp_098013_20240401_02_t1": 3, "lc09_l2sp_098014_20240401_02_t1": 3, "lc09_l2sp_098015_20240401_02_t1": 3, "dive": 3, "deeper": 3, "base": [3, 4], "item_kei": 3, "subcat": 3, "veget": 3, "8231": 3, "8171": 3, "67255501": 3, "int64": 3, "854e": 3, "305e": 3, "247e": 3, "7e": 3, "attribut": 3, "area_or_point": 3, "_fillvalu": 3, "scale_factor": 3, "add_offset": 3, "catband": 3, "to_read": 3, "0xarrai": 3, "8231x": 3, "81710": 3, "int641": 3, "1arrai": 3, "05arrai": 3, "485400": 3, "485430": 3, "485460": 3, "730440": 3, "730470": 3, "730500": 3, "float647": 3, "06arrai": 3, "7246800": 3, "7246770": 3, "7246740": 3, "6999960": 3, "6999930": 3, "6999900": 3, "int640crs_wkt": 3, "projc": 3, "58n": 3, "geogc": 3, "datum": 3, "wgs_1984": 3, "spheroid": 3, "7030": 3, "6326": 3, "8901": 3, "9122": 3, "transverse_merc": 3, "latitude_of_origin": 3, "central_meridian": 3, "165": 3, "false_east": 3, "false_north": 3, "9001": 3, "32658": 3, "1984projected_crs_nam": 3, "58ngrid_mapping_nam": 3, "9996spatial_ref": 3, "geotransform": 3, "485385": 3, "7246815": 3, "int64index": 3, "485490": 3, "485520": 3, "485550": 3, "485580": 3, "485610": 3, "485640": 3, "485670": 3, "730230": 3, "730260": 3, "730290": 3, "730320": 3, "730350": 3, "730380": 3, "730410": 3, "7246710": 3, "7246680": 3, "7246650": 3, "7246620": 3, "7246590": 3, "7246560": 3, "7246530": 3, "7000170": 3, "7000140": 3, "7000110": 3, "7000080": 3, "7000050": 3, "7000020": 3, "6999990": 3, "point_fillvalu": 3, "0scale_factor": 3, "0add_offset": 3, "figsiz": 3, "0x7f6eca07c6a0": 3, "becom": 3, "integr": 3, "power": 3, "april": 3, "martin": 3, "durant": 3, "mashup": 3, "logo": 3, "current": 4, "observ": 4, "extent": 4, "classifi": 4, "categori": 4, "similar": 4, "dask_ml": 4, "scalabl": 4, "equival": 4, "scikit": 4, "begin": 4, "conduct": 4, "spectralclust": 4, "open": 4, "get_all_item": 4, "item_search": 4, "849": 4, "deprec": 4, "instead": 4, "ds_2017": 4, "da_2017": 4, "chunktyp": 4, "32611xarrai": 4, "8y": 4, "950dask": 4, "35": 4, "n_band": 4, "n_y": 4, "n_x": 4, "consum": 4, "n_sampl": 4, "n_featur": 4, "total": 4, "vector": 4, "longer": 4, "track": 4, "label": 4, "along": 4, "mean": 4, "abil": 4, "loss": 4, "flattened_xda": 4, "z": 4, "flattened_t_xda": 4, "transpos": 4, "1071600": 4, "multiindex": 4, "dataarrayz": 4, "1071600band": 4, "8dask": 4, "objectmultiindexarrai": 4, "zxypandasmultiindexpandasindex": 4, "do": 4, "onto": 4, "preserv": 4, "again": 4, "set_opt": 4, "keep_attr": 4, "rescaled_xda": 4, "std": 4, "truediv": 4, "41": 4, "18": 4, "abov": 4, "That": 4, "stai": 4, "still": 4, "proper": 4, "readi": 4, "spectra": 4, "9ca936ba": 4, "f7a5": 4, "11ee": 4, "8a99": 4, "6045bd4c3ce8": 4, "connect": 4, "localclust": 4, "dashboard": 4, "91": 4, "8787": 4, "statu": 4, "4e6a1ad6": 4, "worker": 4, "thread": 4, "gib": 4, "schedul": 4, "60b7029a": 4, "10c1": 4, "4127": 4, "8e92": 4, "ea7c2fce8cb3": 4, "comm": 4, "inproc": 4, "2713": 4, "36519": 4, "nanni": 4, "tmp": 4, "scratch": 4, "space": 4, "qjlky4lu": 4, "persist": 4, "feed": 4, "matrix": 4, "earlier": 4, "model": 4, "clf": 4, "n_cluster": 4, "random_st": 4, "kmeans_param": 4, "init_max_it": 4, "persist_embed": 4, "setup": 4, "could": 4, "take": 4, "3169": 4, "send": 4, "81": 4, "80": 4, "slowdown": 4, "scatter": 4, "ahead": 4, "futur": 4, "1462": 4, "lead": 4, "unexpect": 4, "cpu": 4, "26": 4, "sy": 4, "83": 4, "29": 4, "wall": 4, "rerun": 4, "show": 4, "represent": 4, "trust": 4, "On": 4, "unabl": 4, "nbviewer": 4, "nbsp": 4, "spectralclusteringifittedspectralclust": 4, "assign_labels_": 4, "labels_": 4, "done": 4, "input": 4, "restack": 4, "benefit": 4, "90000": 4, "popul": 4, "templat": 4, "output_arrai": 4, "u3": 4, "10716000": 4, "2arrai": 4, "unstacked_2017": 4, "numer": 4, "407": 4, "runtimewarn": 4, "invalid": 4, "encount": 4, "cast": 4, "multiarrai": 4, "copyto": 4, "fill_valu": 4, "unsaf": 4, "dataarrayx": 4, "950y": 4, "11280": 4, "hover": 4, "img": 4, "been": 4, "raw_plot_2017": 4, "sel": 4, "lon": 4, "lat": 4, "grei": 4, "result_plot_2017": 4, "set3": 4, "slightli": 4, "perform": 4, "analys": 4, "tm_b3": 4, "66": 4, "tm_b1": 4, "49": 4, "lwir": 4, "tm_b6": 4, "45": 4, "tm_b2": 4, "tm_b4": 4, "tm_b5": 4, "tm_b7": 4, "27": 4, "ds_1988": 4, "da_1988": 4, "010013": 4, "7y": 4, "31": 4, "010013arrai": 4, "010013000": 4, "7dask": 4, "23": 4, "73": 4, "62": 4, "21": 4, "78": 4, "24": 4, "28": 4, "unstacked_1988": 4, "11282": 4, "raw_plot_1988": 4, "result_plot_1988": 4, "hypothesi": 4, "reced": 4, "extract": 4, "middl": 4, "middle_x_index": 4, "integ": 4, "divis": 4, "middle_y_index": 4, "middle_valu": 4, "int": 4, "center": 4, "programmat": 4, "grab": 4, "mid_x_idx_1988": 4, "mid_y_idx_1988": 4, "mid_x_idx_2017": 4, "mid_y_idx_2017": 4, "water_cluster_1988": 4, "water_cluster_2017": 4, "isn": 4, "water_1988": 4, "water_2017": 4, "astyp": 4, "water_1988_plot": 4, "water_2017_plot": 4, "exactli": 4, "water_diff": 4, "lost": 4, "coolwarm": 4, "did": 4, "shorelin": 4, "finish": 4, "off": 4, "ad": 4, "overlaid": 4, "Not": 4, "nan": 4, "transpar": 4, "redim": 4, "width": 4}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"landsat": [0, 1, 2], "ml": [0, 4], "cookbook": 0, "motiv": 0, "author": 0, "contributor": 0, "structur": 0, "foundat": 0, "exampl": 0, "workflow": 0, "run": 0, "notebook": 0, "binder": 0, "your": 0, "own": 0, "machin": 0, "start": 1, "here": 1, "intro": 1, "data": [1, 2, 3, 4], "overview": [1, 2, 3, 4], "summari": [1, 2, 3, 4], "what": [1, 2, 3, 4], "": [1, 2, 3, 4], "next": [1, 2, 3, 4], "resourc": [1, 2, 3, 4], "refer": [1, 2, 3, 4], "ingest": [2, 3], "geospati": [2, 3], "specif": [2, 3], "tool": [2, 3], "prerequisit": [2, 3, 4], "import": [2, 3, 4], "open": 2, "read": [2, 3], "root": 2, "stac": 2, "catalog": [2, 3, 4], "search": [2, 4], "preview": [2, 3], "result": 2, "select": [2, 3], "dataset": [2, 3, 4], "access": [2, 3], "visual": [2, 3, 4], "retain": [2, 4], "attribut": [2, 4], "set": 2, "cr": [2, 4], "gener": 3, "purpos": 3, "connect": 3, "sourc": 3, "appropri": 3, "type": 3, "initi": 3, "reader": 3, "list": 3, "content": 3, "detail": 3, "examin": 3, "item": 3, "convert": 3, "analysi": 3, "explor": 3, "collect": 3, "sub": 3, "band": 3, "prepar": 3, "multiband": 3, "load": [3, 4], "true": 3, "color": 3, "imageri": 3, "spectral": 4, "cluster": 4, "reshap": 4, "standard": 4, "info": 4, "pipelin": 4, "un": 4, "flatten": 4, "1988": 4, "unstack": 4, "over": 4, "time": 4}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"Landsat ML Cookbook": [[0, "landsat-ml-cookbook"]], "Motivation": [[0, "motivation"]], "Authors": [[0, "authors"]], "Contributors": [[0, "contributors"]], "Structure": [[0, "structure"]], "Foundations": [[0, "foundations"]], "Example Workflows": [[0, "example-workflows"]], "Running the Notebooks": [[0, "running-the-notebooks"]], "Running on Binder": [[0, "running-on-binder"]], "Running on Your Own Machine": [[0, "running-on-your-own-machine"]], "Start Here - Intro to Landsat Data": [[1, "start-here-intro-to-landsat-data"]], "Overview": [[1, "overview"], [2, "overview"], [3, "overview"], [4, "overview"]], "Landsat Data": [[1, "landsat-data"]], "Summary": [[1, "summary"], [2, "summary"], [3, "summary"], [4, "summary"]], "What\u2019s next?": [[1, "whats-next"], [2, "whats-next"], [3, "whats-next"], [4, "whats-next"]], "Resources and references": [[1, "resources-and-references"], [3, "resources-and-references"]], "Data Ingestion - Geospatial-Specific Tooling": [[2, "data-ingestion-geospatial-specific-tooling"]], "Prerequisites": [[2, "prerequisites"], [3, "prerequisites"], [4, "prerequisites"]], "Imports": [[2, "imports"], [3, "imports"], [4, "imports"]], "Open and read the root of the STAC catalog": [[2, "open-and-read-the-root-of-the-stac-catalog"]], "Search for Landsat Data": [[2, "search-for-landsat-data"]], "Preview Results and Select a Dataset": [[2, "preview-results-and-select-a-dataset"]], "Access the Data": [[2, "access-the-data"]], "Visualize the data": [[2, "visualize-the-data"]], "Retain Attributes": [[2, "retain-attributes"]], "Set the crs attribute": [[2, "set-the-crs-attribute"]], "Resources and References": [[2, "resources-and-references"], [4, "resources-and-references"]], "Data Ingestion - General Purpose Tooling": [[3, "data-ingestion-general-purpose-tooling"]], "Connecting to Data Sources": [[3, "connecting-to-data-sources"]], "Selecting the Appropriate Data Type": [[3, "selecting-the-appropriate-data-type"]], "Initializing Data Readers": [[3, "initializing-data-readers"]], "Reading the Catalog": [[3, "reading-the-catalog"]], "List Catalog Contents": [[3, "list-catalog-contents"]], "Detailed Dataset Examination": [[3, "detailed-dataset-examination"]], "Selecting and Accessing Data": [[3, "selecting-and-accessing-data"]], "Visual Preview": [[3, "visual-preview"]], "Accessing Geospatial Data Items": [[3, "accessing-geospatial-data-items"]], "Converting Data for Analysis": [[3, "converting-data-for-analysis"]], "Exploring Data Collections": [[3, "exploring-data-collections"]], "Accessing Sub-Collections": [[3, "accessing-sub-collections"]], "Reading Specific Data Bands": [[3, "reading-specific-data-bands"]], "Preparing for Multiband Analysis": [[3, "preparing-for-multiband-analysis"]], "Loading and Visualizing True Color Imagery": [[3, "loading-and-visualizing-true-color-imagery"]], "Visualizing Data": [[3, "visualizing-data"]], "Spectral Clustering": [[4, "spectral-clustering"], [4, "id1"]], "Loading Data": [[4, "loading-data"]], "Search the catalog": [[4, "search-the-catalog"]], "Load a dataset": [[4, "load-a-dataset"]], "Retain CRS Attribute": [[4, "retain-crs-attribute"]], "Reshaping Data": [[4, "reshaping-data"]], "Standardize Data": [[4, "standardize-data"]], "Info": [[4, null]], "ML pipeline": [[4, "ml-pipeline"]], "Un-flattening": [[4, "un-flattening"]], "Spectral Clustering for 1988": [[4, "spectral-clustering-for-1988"]], "Load the data": [[4, "load-the-data"]], "Reshape and Standardize": [[4, "reshape-and-standardize"]], "Unstack and Visualize": [[4, "unstack-and-visualize"]], "Spectral Clustering Over Time": [[4, "spectral-clustering-over-time"]]}, "indexentries": {}})