const axios = require('axios');
const cheerio = require('cheerio');
const XIVAPI = require('xivapi-js')
const fs = require('fs')

const myColors = [{
		"key": "0",
		"color": "Undyed"
	},
	{
		"key": "1",
		"color": "Snow White"
	},
	{
		"key": "2",
		"color": "Ash Grey"
	},
	{
		"key": "3",
		"color": "Goobbue Grey"
	},
	{
		"key": "4",
		"color": "Slate Grey"
	},
	{
		"key": "5",
		"color": "Charcoal Grey"
	},
	{
		"key": "6",
		"color": "Soot Black"
	},
	{
		"key": "7",
		"color": "Rose Pink"
	},
	{
		"key": "8",
		"color": "Lilac Purple"
	},
	{
		"key": "9",
		"color": "Rolanberry Red"
	},
	{
		"key": "10",
		"color": "Dalamud Red"
	},
	{
		"key": "11",
		"color": "Rust Red"
	},
	{
		"key": "12",
		"color": "Wine Red"
	},
	{
		"key": "13",
		"color": "Coral Pink"
	},
	{
		"key": "14",
		"color": "Blood Red"
	},
	{
		"key": "15",
		"color": "Salmon Pink"
	},
	{
		"key": "16",
		"color": "Sunset Orange"
	},
	{
		"key": "17",
		"color": "Mesa Red"
	},
	{
		"key": "18",
		"color": "Bark Brown"
	},
	{
		"key": "19",
		"color": "Chocolate Brown"
	},
	{
		"key": "20",
		"color": "Russet Brown"
	},
	{
		"key": "21",
		"color": "Kobold Brown"
	},
	{
		"key": "22",
		"color": "Cork Brown"
	},
	{
		"key": "23",
		"color": "Qiqirn Brown"
	},
	{
		"key": "24",
		"color": "Opo-opo Brown"
	},
	{
		"key": "25",
		"color": "Aldgoat Brown"
	},
	{
		"key": "26",
		"color": "Pumpkin Orange"
	},
	{
		"key": "27",
		"color": "Acorn Brown"
	},
	{
		"key": "28",
		"color": "Orchard Brown"
	},
	{
		"key": "29",
		"color": "Chestnut Brown"
	},
	{
		"key": "30",
		"color": "Gobbiebag Brown"
	},
	{
		"key": "31",
		"color": "Shale Brown"
	},
	{
		"key": "32",
		"color": "Mole Brown"
	},
	{
		"key": "33",
		"color": "Loam Brown"
	},
	{
		"key": "34",
		"color": "Bone White"
	},
	{
		"key": "35",
		"color": "Ul Brown"
	},
	{
		"key": "36",
		"color": "Desert Yellow"
	},
	{
		"key": "37",
		"color": "Honey Yellow"
	},
	{
		"key": "38",
		"color": "Millioncorn Yellow"
	},
	{
		"key": "39",
		"color": "Coeurl Yellow"
	},
	{
		"key": "40",
		"color": "Cream Yellow"
	},
	{
		"key": "41",
		"color": "Halatali Yellow"
	},
	{
		"key": "42",
		"color": "Raisin Brown"
	},
	{
		"key": "43",
		"color": "Mud Green"
	},
	{
		"key": "44",
		"color": "Sylph Green"
	},
	{
		"key": "45",
		"color": "Lime Green"
	},
	{
		"key": "46",
		"color": "Moss Green"
	},
	{
		"key": "47",
		"color": "Meadow Green"
	},
	{
		"key": "48",
		"color": "Olive Green"
	},
	{
		"key": "49",
		"color": "Marsh Green"
	},
	{
		"key": "50",
		"color": "Apple Green"
	},
	{
		"key": "51",
		"color": "Cactuar Green"
	},
	{
		"key": "52",
		"color": "Hunter Green"
	},
	{
		"key": "53",
		"color": "Ochu Green"
	},
	{
		"key": "54",
		"color": "Adamantoise Green"
	},
	{
		"key": "55",
		"color": "Nophica Green"
	},
	{
		"key": "56",
		"color": "Deepwood Green"
	},
	{
		"key": "57",
		"color": "Celeste Green"
	},
	{
		"key": "58",
		"color": "Turquoise Green"
	},
	{
		"key": "59",
		"color": "Morbol Green"
	},
	{
		"key": "60",
		"color": "Ice Blue"
	},
	{
		"key": "61",
		"color": "Sky Blue"
	},
	{
		"key": "62",
		"color": "Seafog Blue"
	},
	{
		"key": "63",
		"color": "Peacock Blue"
	},
	{
		"key": "64",
		"color": "Rhotano Blue"
	},
	{
		"key": "65",
		"color": "Corpse Blue"
	},
	{
		"key": "66",
		"color": "Ceruleum Blue"
	},
	{
		"key": "67",
		"color": "Woad Blue"
	},
	{
		"key": "68",
		"color": "Ink Blue"
	},
	{
		"key": "69",
		"color": "Raptor Blue"
	},
	{
		"key": "70",
		"color": "Othard Blue"
	},
	{
		"key": "71",
		"color": "Storm Blue"
	},
	{
		"key": "72",
		"color": "Void Blue"
	},
	{
		"key": "73",
		"color": "Royal Blue"
	},
	{
		"key": "74",
		"color": "Midnight Blue"
	},
	{
		"key": "75",
		"color": "Shadow Blue"
	},
	{
		"key": "76",
		"color": "Abyssal Blue"
	},
	{
		"key": "77",
		"color": "Lavender Purple"
	},
	{
		"key": "78",
		"color": "Gloom Purple"
	},
	{
		"key": "79",
		"color": "Currant Purple"
	},
	{
		"key": "80",
		"color": "Iris Purple"
	},
	{
		"key": "81",
		"color": "Grape Purple"
	},
	{
		"key": "82",
		"color": "Lotus Pink"
	},
	{
		"key": "83",
		"color": "Colibri Pink"
	},
	{
		"key": "84",
		"color": "Plum Purple"
	},
	{
		"key": "85",
		"color": "Regal Purple"
	},
	{
		"key": "86",
		"color": "Ruby Red"
	},
	{
		"key": "87",
		"color": "Cherry Pink"
	},
	{
		"key": "88",
		"color": "Canary Yellow"
	},
	{
		"key": "89",
		"color": "Vanilla Yellow"
	},
	{
		"key": "90",
		"color": "Dragoon Blue"
	},
	{
		"key": "91",
		"color": "Turquoise Blue"
	},
	{
		"key": "92",
		"color": "Gunmetal Black"
	},
	{
		"key": "93",
		"color": "Pearl White"
	},
	{
		"key": "94",
		"color": "Metallic Brass"
	},
	{
		"key": "101",
		"color": "Pure White"
	},
	{
		"key": "102",
		"color": "Jet Black"
	},
	{
		"key": "103",
		"color": "Pastel Pink"
	},
	{
		"key": "104",
		"color": "Dark Red"
	},
	{
		"key": "105",
		"color": "Dark Brown"
	},
	{
		"key": "106",
		"color": "Pastel Green"
	},
	{
		"key": "107",
		"color": "Dark Green"
	},
	{
		"key": "108",
		"color": "Pastel Blue"
	},
	{
		"key": "109",
		"color": "Dark Blue"
	},
	{
		"key": "110",
		"color": "Pastel Purple"
	},
	{
		"key": "111",
		"color": "Dark Purple"
	},
	{
		"key": "112",
		"color": "Metallic Silver"
	},
	{
		"key": "113",
		"color": "Metallic Gold"
	},
	{
		"key": "114",
		"color": "Metallic Red"
	},
	{
		"key": "115",
		"color": "Metallic Orange"
	},
	{
		"key": "116",
		"color": "Metallic Yellow"
	},
	{
		"key": "117",
		"color": "Metallic Green"
	},
	{
		"key": "118",
		"color": "Metallic Sky Blue"
	},
	{
		"key": "119",
		"color": "Metallic Blue"
	},
	{
		"key": "120",
		"color": "Metallic Purple"
	}
]
const xiv = new XIVAPI({
	private_key: '',
})

//const path = "C:\\Users\\Vayhyr\\Documents\\CMTool\\Gearsets\\"
const path = "/mnt/c/Users/Vayhyr/Documents/CMTool/Gearsets/"

const getGlamData = async () => {
	if (process.argv.length > 2) {
		var myurl = process.argv[2]
	} else {
		var myurl = "https://ffxiv.eorzeacollection.com/glamour/47367/oni-princess"
	}
	console.log("> Loading - " + myurl)
	try {
		const {
			data
		} = await axios.get(myurl);
		const $ = cheerio.load(data);
		let myGlam = [];

		$('.s-glamour-details-items').each((_idx, el) => {
			myGlam[_idx] = {};
			var head = $(el).find('.c-gear-slot-head');
			myGlam[_idx]['head_name'] = $(head).find('.c-gear-slot-item-info-name').text();
			myGlam[_idx]['head_color'] = filterArray($(head).find('.c-gear-slot-item-info-color').text().replace(/(\r\n|\n|\r)/gm, "").split(' '));

			var body = $(el).find('.c-gear-slot-body');
			myGlam[_idx]['body_name'] = $(body).find('.c-gear-slot-item-info-name').text();
			myGlam[_idx]['body_color'] = filterArray($(body).find('.c-gear-slot-item-info-color').text().replace(/(\r\n|\n|\r)/gm, "").split(' '));

			var hands = $(el).find('.c-gear-slot-hands');
			myGlam[_idx]['hands_name'] = $(hands).find('.c-gear-slot-item-info-name').text();
			myGlam[_idx]['hands_color'] = filterArray($(hands).find('.c-gear-slot-item-info-color').text().replace(/(\r\n|\n|\r)/gm, "").split(' '));

			var legs = $(el).find('.c-gear-slot-legs');
			myGlam[_idx]['legs_name'] = $(legs).find('.c-gear-slot-item-info-name').text();
			myGlam[_idx]['legs_color'] = filterArray($(legs).find('.c-gear-slot-item-info-color').text().replace(/(\r\n|\n|\r)/gm, "").split(' '));

			var feet = $(el).find('.c-gear-slot-feet');
			myGlam[_idx]['feet_name'] = $(feet).find('.c-gear-slot-item-info-name').text();
			myGlam[_idx]['feet_color'] = filterArray($(feet).find('.c-gear-slot-item-info-color').text().replace(/(\r\n|\n|\r)/gm, "").split(' '));

			var weapon = $(el).find('.c-gear-slot-weapon');
			myGlam[_idx]['mainhand_name'] = $(weapon).find('.c-gear-slot-item-info-name').text();
			myGlam[_idx]['mainhand_color'] = filterArray($(weapon).find('.c-gear-slot-item-info-color').text().replace(/(\r\n|\n|\r)/gm, "").split(' '));

			var offhand = $(el).find('.c-gear-slot-offhand');
			myGlam[_idx]['offhand_name'] = $(offhand).find('.c-gear-slot-item-info-name').text();
			myGlam[_idx]['offhand_color'] = filterArray($(offhand).find('.c-gear-slot-item-info-color').text().replace(/(\r\n|\n|\r)/gm, "").split(' '));
			if(myGlam[_idx]['offhand_name'] == "" && myGlam[_idx]['mainhand_name'] != ""){
				myGlam[_idx]['offhand_name'] = myGlam[_idx]['mainhand_name']
				myGlam[_idx]['offhand_color'] = myGlam[_idx]['mainhand_color']
			}

			myGlam[_idx]['earrings_name'] = $($(el).find('.c-gear-slot-earrings')).find('.c-gear-slot-item-info-name').text();
			myGlam[_idx]['necklace_name'] = $($(el).find('.c-gear-slot-necklace')).find('.c-gear-slot-item-info-name').text();
			myGlam[_idx]['bracelets_name'] = $($(el).find('.c-gear-slot-bracelets')).find('.c-gear-slot-item-info-name').text();
			myGlam[_idx]['ring1_name'] = $($(el).find('.c-gear-slot-ring')[0]).find('.c-gear-slot-item-info-name').text();
			myGlam[_idx]['ring2_name'] = $($(el).find('.c-gear-slot-ring')[1]).find('.c-gear-slot-item-info-name').text();


		});
		myGlam[myGlam.length - 1]['name'] = $('.b-title-text').first().text();

		return myGlam;

	} catch (error) {
		throw error;
	}
};

Array.prototype.exists = function (x) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == x) return true;
	}
	return false;
}

function filterArray(myArrray) {
	return myArrray.filter(function (entry) {
		return entry.trim() != '';
	}).filter(function (x) {
		return x != "⬤" && x != "◯";
	}).join(' ');
}

function getModelMain(myGlam, myGlamID) {
	var myGlamBytes = {}
	Object.keys(myGlamID).forEach(function (key) {
		getBytes(myGlamID[key]).then(function (db) {
			if( key == "offhand_name" && myGlamID["offhand_name"] == myGlamID["mainhand_name"]){
				myGlamBytes[key] = db.ModelSub;
			} else {
				myGlamBytes[key] = db.ModelMain;
			}
			
			if (Object.keys(myGlamBytes).length == Object.keys(myGlamID).length) {
				myGlam3(myGlam, myGlamBytes);
			}
		})
	});
};

async function getID(myItem) {
	return myItemf = Promise.resolve(xiv.search(myItem))
};

async function getBytes(myItem) {
	return myItemf = Promise.resolve(xiv.data.get("Item", myItem))
};

function myGlamToID(myGlam) {
	var myGlamID = {}
	var colorList = ["name", "mainhand_color", "offhand_color", "head_color", "body_color", "hands_color", "legs_color", "feet_color"]
	for (var attributename in myGlam[0]) {
		if (myGlam[0][attributename] != "" && !(colorList.exists(attributename))) {
			myGlamID[attributename] = myGlam[0][attributename]
		}
	}
	return myGlamID;
};

function decimalToHexString(number) {
	return number.toString(16).toUpperCase();
}

function DecimalHexTwosComplement(decimal, size) {
	var hexadecimal = decimal.toString(16);

	while ((hexadecimal.length % size) != 0) {
		hexadecimal = "" + 0 + hexadecimal;
	}

	return hexadecimal;

}

function convertBytesEndian(myBytes, size) {
	console.log("[DEBUG] " + myBytes + "," + size + " -> " + DecimalHexTwosComplement(decimalToHexString(myBytes), size).toString(16).match(/.{1,2}/g).reverse().join(" ").toString(16))
	return DecimalHexTwosComplement(decimalToHexString(myBytes), size).toString(16).match(/.{1,2}/g).reverse().join(" ").toString(16);
}

function findColorByName(name) {
	try {
		return myColors.filter(element => element.color == name)[0].key
	} catch (err) {
		return 0
	}

}

function colorNameToBytes(myColor) {
	return convertBytesEndian(parseInt(findColorByName(myColor)), 2)
}

function myGlamBytesToEquipmentBytes(myGlam, myGlamBytes) {
	let EquipmentBytes = [];
	if (myGlam[0]["head_name"] != '') {
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["head_name"].split(',')[0]), 4))
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["head_name"].split(',')[1]), 2))
		EquipmentBytes.push(colorNameToBytes(myGlam[0]["head_color"]))
	} else {
		EquipmentBytes.push("00 00 00 00")
	}
	if (myGlam[0]["body_name"] != '') {
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["body_name"].split(',')[0]), 4))
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["body_name"].split(',')[1]), 2))
		EquipmentBytes.push(colorNameToBytes(myGlam[0]["body_color"]))
	} else {
		EquipmentBytes.push("00 00 00 00")
	}
	if (myGlam[0]["hands_name"] != '') {
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["hands_name"].split(',')[0]), 4))
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["hands_name"].split(',')[1]), 2))
		EquipmentBytes.push(colorNameToBytes(myGlam[0]["hands_color"]))
	} else {
		EquipmentBytes.push("00 00 00 00")
	}
	if (myGlam[0]["legs_name"] != '') {
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["legs_name"].split(',')[0]), 4))
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["legs_name"].split(',')[1]), 2))
		EquipmentBytes.push(colorNameToBytes(myGlam[0]["legs_color"]))
	} else {
		EquipmentBytes.push("00 00 00 00")
	}
	if (myGlam[0]["feet_name"] != '') {
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["feet_name"].split(',')[0]), 4))
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["feet_name"].split(',')[1]), 2))
		EquipmentBytes.push(colorNameToBytes(myGlam[0]["feet_color"]))
	} else {
		EquipmentBytes.push("00 00 00 00")
	}
	//ASC.
	if (myGlam[0]["earrings_name"] != '') {
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["earrings_name"].split(',')[0]), 4))
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["earrings_name"].split(',')[1]), 2))
		EquipmentBytes.push("00")
	} else {
		EquipmentBytes.push("00 00 00 00")
	}

	if (myGlam[0]["necklace_name"] != '') {
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["necklace_name"].split(',')[0]), 4))
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["necklace_name"].split(',')[1]), 2))
		EquipmentBytes.push("00")
	} else {
		EquipmentBytes.push("00 00 00 00")
	}

	if (myGlam[0]["bracelets_name"] != '') {
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["bracelets_name"].split(',')[0]), 4))
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["bracelets_name"].split(',')[1]), 2))
		EquipmentBytes.push("00")
	} else {
		EquipmentBytes.push("00 00 00 00")
	}

	if (myGlam[0]["ring1_name"] != '') {
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["ring1_name"].split(',')[0]), 4))
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["ring1_name"].split(',')[1]), 2))
		EquipmentBytes.push("00")
	} else {
		EquipmentBytes.push("00 00 00 00")
	}

	if (myGlam[0]["ring2_name"] != '') {
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["ring2_name"].split(',')[0]), 4))
		EquipmentBytes.push(convertBytesEndian(parseInt(myGlamBytes["ring2_name"].split(',')[1]), 2))
	} else {
		EquipmentBytes.push("00 00 00")
	}

	return EquipmentBytes.join(' ')
}

const myGlam = function () {

	getGlamData().then((myGlam) => {
		let myGlamID = myGlamToID(myGlam)
		var myGlamA = {}
		Object.keys(myGlamID).forEach(function (key) {
			getID(myGlamID[key]).then(function (db) {
				myGlamA[key] = db.Results[0].ID;
				if (Object.keys(myGlamA).length == Object.keys(myGlamID).length) {
					myGlam2(myGlam, myGlamA)
				}
			})
		});
	});
}

const myGlam2 = function (myGlam, myGlamA) {
	var myGlamB = getModelMain(myGlam, myGlamA)
}

const myGlam3 = function (myGlam, myGlamBytes) {

	//var EquipmentBytes = myGlamBytesToEquipmentBytes(myGlam, myGlamBytes)
	//var Description = myGlam[0]["name"]
	//var DateCreated = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')	
	if (myGlam[0]["mainhand_name"] != '') {
		var MainHand = {
			"Item1": parseInt(myGlamBytes["mainhand_name"].split(',')[0].replace(/\s/g, '')),
			"Item2": parseInt(myGlamBytes["mainhand_name"].split(',')[1].replace(/\s/g, '')),
			"Item3": parseInt(myGlamBytes["mainhand_name"].split(',')[2].replace(/\s/g, '')),
			"Item4": parseInt(findColorByName(myGlam[0]["mainhand_color"]))
		}
	} else {
		var MainHand = {
			"Item1": 301,
			"Item2": 31,
			"Item3": 1,
			"Item4": 0
		}
	}
	if (myGlam[0]["offhand_name"] != '') {
		var OffHand = {
			"Item1": parseInt(myGlamBytes["offhand_name"].split(',')[0].replace(/\s/g, '')),
			"Item2": parseInt(myGlamBytes["offhand_name"].split(',')[1].replace(/\s/g, '')),
			"Item3": parseInt(myGlamBytes["offhand_name"].split(',')[2].replace(/\s/g, '')),
			"Item4": parseInt(findColorByName(myGlam[0]["offhand_color"]))
		}
	} else {
		var OffHand = {
			"Item1": 0,
			"Item2": 0,
			"Item3": 0,
			"Item4": 0
		}
	}
	var tzoffset = (new Date()).getTimezoneOffset() * 60000 ;
	var myJSON = createGearSet(MainHand, OffHand, myGlamBytesToEquipmentBytes(myGlam, myGlamBytes), myGlam[0]["name"], new Date(Date.now() - tzoffset).toISOString().replace(/T/, ' ').replace(/\..+/, ''))
	console.log(myJSON)
	var JSONstr = JSON.stringify(myJSON)
	try {
		fs.writeFileSync(path + myGlam[0]["name"] + ".json", JSONstr)
	} catch (err) {
		console.error(err)
	}
}

function createGearSet(a, b, c, d, e) {
	return myGetSet = {
		"MainHand": a,
		"OffHand": b,
		"EquipmentBytes": c,
		"Description": d,
		"DateCreated": e
	}
}

myGlam();
console.log("Done.")