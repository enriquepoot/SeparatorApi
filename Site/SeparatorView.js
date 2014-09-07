String.prototype.replaceAll = function (search, replacement) {
    'use strict';
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

Number.prototype.toFixedDown = function(digits) {

	var addSign = this < 0;

    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
        m = this.toString().match(re);
    var x =  m ? parseFloat(m[1]) : this.valueOf();
   	var unsign = x.toString().replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
   return addSign ? '-'+ x : x;
};

function toCurrency(n, currency) {
    return "$ " + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

Number.prototype.toPercent = function() {
    return (this * 100).toFixedDown(4) + "%";
}

if (!window.JSON) {
  window.JSON = {
    parse: function (sJSON) { return eval("(" + sJSON + ")"); },
    stringify: function (vContent) {
      if (vContent instanceof Object) {
        var sOutput = "";
        if (vContent.constructor === Array) {
          for (var nId = 0; nId < vContent.length; sOutput += this.stringify(vContent[nId]) + ",", nId++);
            return "[" + sOutput.substr(0, sOutput.length - 1) + "]";
        }
        if (vContent.toString !== Object.prototype.toString) { 
          return "\"" + vContent.toString().replace(/"/g, "\\$&") + "\"";
        }
        for (var sProp in vContent) { 
          sOutput += "\"" + sProp.replace(/"/g, "\\$&") + "\":" + this.stringify(vContent[sProp]) + ",";
        }
        return "{" + sOutput.substr(0, sOutput.length - 1) + "}";
     }
     return typeof vContent === "string" ? "\"" + vContent.replace(/"/g, "\\$&") + "\"" : String(vContent);
    }
  };
}

(function (ns, $) {
	"use strict";
	ns.SeparatorView = function () {
		this.init.apply(this, arguments);
	};
	
	var filterFloat = function (value) {
    	if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value))
      		return Number(value);
		return NaN;
	}
	
	ns.SeparatorView.prototype = {
		getDiv: null
		,waitDiv: null
		,postDiv: null
		,inptDiv: null
		,vsDiv: null
		,spDiv: null
		,inDiv: null
		,ppDiv: null
		,meDiv: null
		,wContentDiv: null
		,spResDiv: null
		,cvResDiv: null
		,coResDiv: null
		,noResDiv: null
		,leResDiv: null
		,postFunc: null
		,reData: null
		,init: function (args) {
			var self = this;
			self.CreateGetDiv(args[0]);
			self.CreateWaitDiv(args[1]);
			self.CreatePostDiv([args[2]]);
			self.postFunc = args[3];

			//Get
			self.CreateInputDiv();
			self.CreateVesselDiv();
			self.CreatePerfomanceDiv()
			self.CreateInletDiv();
			self.CreatePlatesDiv();
			self.CreateExtractorDiv();
			self.CreatePostButton();


			var divLHelper = $(document.createElement("div")).attr({"class": "left half"});
			divLHelper.append(self.inptDiv.attr({"class": "container spaceBot"}));
			divLHelper.append(self.vsDiv.attr({"class": "container spaceBot"}));
			self.getDiv.append(divLHelper);

			var divRHelper = $(document.createElement("div")).attr({"class": "right half"});
			divRHelper.append(self.spDiv.attr({"class": "container spaceBot"}));
			divRHelper.append(self.meDiv.attr({"class": "container spaceBot"}));
			self.getDiv.append(divRHelper);

			self.getDiv.append($(document.createElement("div")).attr({"class": "clear"}));

			var divBHelper = $(document.createElement("div")).attr({"class": "full"});
			divBHelper.append(self.ppDiv.attr({"class": "container spaceBot"}));
			divBHelper.append(self.inDiv.attr({"class": "container spaceBot"}));
			self.getDiv.append(divBHelper);

			self.getDiv.append($(document.createElement("div")).attr({"class": "clear"}));

			var divMinHelper = $(document.createElement("div")).attr({"class": "full"});
			$('<label />', { 'for': 'RunSolver', text: 'Minimize Model', class: "right" }).appendTo(divMinHelper);
		    $('<input />', { type: 'checkbox', id: 'RunSolver', value: 'MinimizeModel', class: "right", checked:"checked" }).appendTo(divMinHelper);
		    self.getDiv.append(divMinHelper);
			
			self.getDiv.append($(document.createElement("div")).attr({"class": "clear"}));

			var divBuHelper = $(document.createElement("div")).attr({"class": "full"});
			divBuHelper.append(self.CreatePostButton().attr({"class": "right"}));
			self.getDiv.append(divBuHelper);

			//Wait
			self.CreateWaitContentDiv();
			self.waitDiv.append(self.wContentDiv);

			//Results
			self.CreatePerfomanceResDiv();
			self.CreateVesselResDiv();
			self.CreateConstrainsResDiv();
			self.CreateNozzleResDiv();
			self.CreateLevelResDiv();
			self.CreateBackButton();

			var divPLHelper = $(document.createElement("div")).attr({"class": "left half"});
			divPLHelper.append(self.cvResDiv.attr({"class": "container spaceBot"}));
			divPLHelper.append(self.coResDiv.attr({"class": "container spaceBot"}));			
			divPLHelper.append(self.leResDiv.attr({"class": "container spaceBot"}));			
			divPLHelper.append(self.noResDiv.attr({"class": "container spaceBot"}));

			var divPRHelper = $(document.createElement("div")).attr({"class": "right half"});
			divPRHelper.append(self.spResDiv.attr({"class": "container spaceBot"}));			
			
			self.postDiv.append(divPLHelper);
			self.postDiv.append(divPRHelper);

			self.postDiv.append($(document.createElement("div")).attr({"class": "clear"}));

			var divPBuHelper = $(document.createElement("div")).attr({"class": "full"});
			divPBuHelper.append(self.CreateBackButton().attr({"class": "right"}));
			self.postDiv.append(divPBuHelper);
		}
		//Main Divs
		,CreateGetDiv: function (id) {
			var self = this;
			self.getDiv = self._CreateDiv(id).attr({"class": "full"});
		}
		,CreateWaitDiv: function (id) {
			var self = this;
			self.waitDiv = self._CreateDiv(id).attr({"class": "full"});
		}
		,CreatePostDiv: function (id) {
			var self = this;
			self.postDiv = self._CreateDiv(id).attr({"class": "full"});
		}
		//Get Divs
		,CreateInputDiv: function () {
			var self = this;

			var vItems = [{
				vID: 1
				,text: "V"
			},{
				vID: 2
				,text: "H"
			}];

			var yItems = [{
				vID: 1
				,text: "N"
			},{
				vID: 2
				,text: "Y"
			}];


			self.inptDiv = self._CreateDiv("inptDiv");
			var divHHelper = self._CreateDiv("");
			divHHelper.append(self._CreateHeader("Input Data").attr({"class": "header"}));
			self.inptDiv.append(divHHelper);
			self.inptDiv.append(self._CreateInptCombo("B3", "Separator type, V or H?", vItems)); // Combobox
			self.inptDiv.append(self._CreateInput("B7", "Average oil flowrate, stock tank bpd"));
			self.inptDiv.append(self._CreateInput("B8", "Average gas flowrate, MMSCFD"));
			self.inptDiv.append(self._CreateInput("B11", "Design/surge factor"));
			self.inptDiv.append(self._CreateInput("B14", "Slug sizing, seconds of liquid filled pipe at design feed mixture velocity (same volume used for surge), sec"));
			self.inptDiv.append(self._CreateInptCombo("B15", "Foaming crude ? Y/N", yItems)); // Combobox
			self.inptDiv.append(self._CreateInput("B16", "Separator temperature, F"));
			self.inptDiv.append(self._CreateInput("B18", "Separator pressure, psig"));
			self.inptDiv.append(self._CreateInput("B20", "Gas gravity"));
			self.inptDiv.append(self._CreateInput("B21", "Oil gravity @ stock tank conditions, API"));						
			self.inptDiv.append(self._CreateInput("B23", "Inlet sand concentration, pptb liquid"));
			self.inptDiv.append(self._CreateInput("B26", "Sand/solids SG"));
			self.inptDiv.append(self._CreateInput("B29", "Atmospheric pressure, psia"));
			self.inptDiv.append(self._CreateInput("B30", "Temperature base, F"));
			self.inptDiv.append(self._CreateInput("B31", "Pressure base, psia"));
		}
		,CreateVesselDiv: function () {
			var self = this;
			self.vsDiv = self._CreateDiv("vsDiv");
			var divHHelper = self._CreateDiv("");
			divHHelper.append(self._CreateHeader("Vessel Data & Sizing Constraints").attr({"class": "header"}));
			self.vsDiv.append(divHHelper);
			self.vsDiv.append(self._CreateInput("B48", "Min holdup time for control volume (LLA - HLA), min"));
		}
		,CreatePerfomanceDiv: function () {
			var self = this;
			self.spDiv = self._CreateDiv("spDiv");
			var divHHelper = self._CreateDiv("");
			divHHelper.append(self._CreateHeader("Separation Performance").attr({"class": "header"}));
			self.spDiv.append(divHHelper);
			self.spDiv.append(self._CreateInput("B68", "Liquid carryover in separated gas, gal/MMSCF"));						
			self.spDiv.append(self._CreateInput("B69", "Free gas in separated oil, volume %"));
			self.spDiv.append(self._CreateInput("B70", "Separable gas bubble size from oil, microns"));
			self.spDiv.append(self._CreateInput("B71", "Corrected oil residence time (NLL), min"));
			self.spDiv.append(self._CreateInput("B72", "Max allowable horiz oil velocity (horiz seps only), ft/sec"));
			self.spDiv.append(self._CreateInput("B81", "Plug flow Souders-Brown sizing coefficient in gas gravity separation section, Ks"));
		}
		,CreateInletDiv: function () {
			var self = this;

			var items = [{
				id: 1
				,desc: "No inlet device"
				,rhoBID: "C101"
				,areaBID: "E101"
				,hlsdBID: "F101"
				,x2BID: "G101"
				,inletBID: "H101"
				,weightBID: "I101"
			},{
				id: 2
				,desc: "Diverter/splash plate"
				,rhoBID: "C102"
				,areaBID: "E102"
				,hlsdBID: "F102"
				,x2BID: "G102"
				,inletBID: "H102"
				,weightBID: "I102"
			},{
				id: 3
				,desc: "Half-open pipe"
				,rhoBID: "C103"
				,areaBID: "E103"
				,hlsdBID: "F103"
				,x2BID: "G103"
				,inletBID: "H103"
				,weightBID: "I103"
			},{
				id: 4
				,desc: "Multi-vane</br>(Schoepentoeter</br>/Evenflow)"
				,rhoBID: "C104"
				,areaBID: "E104"
				,hlsdBID: "F104"
				,x2BID: "G104"
				,inletBID: "H104"
				,weightBID: "I104"
			},{
				id: 5
				,desc: "Cyclonic"
				,rhoBID: "C105"
				,areaBID: "E105"
				,hlsdBID: "F105"
				,x2BID: "G105"
				,inletBID: "H105"
				,weightBID: "I105"
			}];

			self.inDiv = self._CreateDiv("inDiv");
			var divHHelper = self._CreateDiv("");
			divHHelper.append(self._CreateHeader("Inlet Device").attr({"class": "header"}));
			self.inDiv.append(divHHelper);
			self.inDiv.append(self._CreateInletTable("inDiv", items));
		}
		,CreatePlatesDiv: function () {
			var self = this;

			var comboItem = [{
				vID: 0
				,text: "N/A"
			},{
				vID: 1
				,text: "N"
			},{
				vID: 2
				,text: "Y"
			}];

			var items = [{
				desc: "Gas gravity separation section, Y/N"
				,boolBID: "B113"
				,impBID: "C113"
				,EuBID: "D113"
				,comboItems: comboItem
			},{
				desc: "Adjacent to mist extractor, Y/N"
				,boolBID: "B114"
				,impBID: "C114"
				,EuBID: "D114"
				,comboItems: comboItem
			},{
				desc: "Adjacent to mist extractor, Y/N"
				,boolBID: "B115"
				,impBID: "C115"
				,EuBID: "D115"
				,comboItems: comboItem
			}];

			self.ppDiv = self._CreateDiv("ppDiv");
			var divHHelper = self._CreateDiv("");
			divHHelper.append(self._CreateHeader("Perforated Plates/Velocity Profile Adjusters").attr({"class": "header"}));
			self.ppDiv.append(divHHelper);			
			self.ppDiv.append(self._CreatePerfoTable("ppDiv", items));
		}
		,CreateExtractorDiv: function () {
			var self = this;
			var comboItem = [{
					vID: 0
					,text: "N/A"
				},{
					vID: 1
					,text: "V"
				},{
					vID: 2
					,text: "H"
				}];

			var meshItems = [{
				model: "None"
				,desc: "N/A"
				,flowBID: "C123"
				,comboItems: comboItem
			},{
				model: "M1"
				,desc: "High capacity wire mesh"
				,flowBID: "C124"
				,comboItems: comboItem
			},{
				model: "M2"
				,desc: "Standard wire mesh"
				,flowBID: "C125"
				,comboItems: comboItem
			},{
				model: "M3"
				,desc: "High eff. wire mesh - 0.011"
				,flowBID: "C126"
				,comboItems: comboItem
			},{
				model: "M4"
				,desc: "High eff. wire mesh - 0.006"
				,flowBID: "C127"
				,comboItems: comboItem
			}];

			var meshIds = {
				combo: "A131"
				,desc: "B131"
				,flow: "C131"
			}

			var meshComboItems = [{
					vID: 0
					,text: "None"
				},{
					vID: 1
					,text: "M1"
				},{
					vID: 2
					,text: "M2"
				},{
					vID: 3
					,text: "M3"
				},{
					vID: 4
					,text: "M4"
				}];

			var vaneItems = [{
				model: "None"
				,desc: "N/A"
				,flowBID: "C136"
				,comboItems: comboItem
			},{
				model: "V1"
				,desc: "Simple vane design"
				,flowBID: "C137"
				,comboItems: comboItem
			},{
				model: "V2"
				,desc: "High performance vane design <br>- single pocket"
				,flowBID: "C138"
				,comboItems: comboItem
			},{
				model: "V3"
				,desc: "High performance vane design <br>- double pocket"
				,flowBID: "C139"
				,comboItems: comboItem
			}];

			var vaneIds = {
				combo: "A143"
				,desc: "B143"
				,flow: "C143"
			}

			var vaneComboItems = [{
					vID: 0
					,text: "None"
				},{
					vID: 1
					,text: "V1"
				},{
					vID: 2
					,text: "V2"
				},{
					vID: 3
					,text: "V3"
				}];

			var cycloItems = [{
				model: "None"
				,desc: "N/A"
				,flowBID: "C149"
				,comboItems: comboItem
			},{
				model: "C1"
				,desc: '2" axial-flow cyclone'
				,flowBID: "C150"
				,comboItems: comboItem
			},{
				model: "C2"
				,desc: '3" axial-flow cyclone'
				,flowBID: "C151"
				,comboItems: comboItem
			}];	

			var cycloIds = {
				combo: "A155"
				,desc: "B155"
				,flow: "C155"
			}

			var cycloComboItems = [{
					vID: 0
					,text: "None"
				},{
					vID: 1
					,text: "C1"
				},{
					vID: 2
					,text: "C2"
				}];

			var mistItems = [{
					vID: 0
					,text: "None"
				},{
					vID: 1
					,text: "Mesh"
				},{
					vID: 2
					,text: "Vane"
				},{
					vID: 3
					,text: "Cyclone"
				}];

			var selectItems = [{
				desc: "General classification </br> Mesh, Vane, Cyclone, None"
				,primID: "B514"
				,secID: "C514"
				,comboItems: mistItems
			}];				

			self.meDiv = self._CreateDiv("meDiv");
			var divHHelper = self._CreateDiv("");
			divHHelper.append(self._CreateHeader("Mist extractor").attr({"class": "header"}));
			self.meDiv.append(divHHelper);				
			self.meDiv.append(self._CreateMistExtratorSelector("mistDiv", selectItems));
			self.meDiv.append(self._CreateExtractorTable("Mesh", meshItems, meshIds, meshComboItems));
			self.meDiv.append(self._CreateExtractorTable("Vane", vaneItems, vaneIds, vaneComboItems));
			self.meDiv.append(self._CreateExtractorTable("Cyclo", cycloItems, cycloIds, cycloComboItems));
		}
		,CreatePostButton: function () {
			var self = this;
			
			return self._CreateButton("btnSend", "Calculate", self.postFunc);
		}
		,CreateWaitContentDiv: function () {
			var self = this;

			self.wContentDiv = self._CreateDiv("wContentDiv").attr({"class": "container"});
			self.wContentDiv.append($(document.createElement("img")).attr({"src": "http://petroskills.com/assets/icons/ajax-loader-big.gif", "class":"waitImage"}));
		}
		,CreatePerfomanceResDiv: function () {
			var self = this;

			var items = [{
				id: "A67"
				,txt: ""
				,clss: "spanRespHalf"
				,resp: [{
					id:"B67"
					,txt: "Design"
					,clss: "contRespThird"
				},{
					id:"C67"
					,txt: "Actual"
					,clss: "contRespThird"
				}]				
			},{
				id: "A68"
				,txt: "Liquid carryover in separated gas, gal/MMSCF"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B68"
					,txt: "0.50"
					,clss: "contRespThird"
				},{
					id:"C68"
					,txt: "0.50"
					,clss: "contRespThird"
				}]				
			},{
				id: "A69"
				,txt: "Free gas in separated oil, volume %"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B69"
					,txt: "5.0%"
					,clss: "contRespThird"
				},{
					id:"C69"
					,txt: "5.0%"
					,clss: "contRespThird"
				}]				
			},{
				id: "A70"
				,txt: "Separable gas bubble size from oil, microns"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B70"
					,txt: "00"
					,clss: "contRespThird"
				},{
					id:"C70"
					,txt: "00"
					,clss: "contRespThird"
				}]				
			},{
				id: "A71"
				,txt: "Corrected oil residence time (NLL), min"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B71"
					,txt: "1.00"
					,clss: "contRespThird"
				},{
					id:"C71"
					,txt: "1.00"
					,clss: "contRespThird"
				}]				
			},{
				id: "A72"
				,txt: "Max allowable horiz oil velocity (horiz seps only), ft/sec"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B72"
					,txt: "0.005"
					,clss: "contRespThird"
				},{
					id:"C72"
					,txt: "0.005"
					,clss: "contRespThird"
				}]				
			},{
				id: "A73"
				,txt: "Feed pipe mixture velocity, ft/sec"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B73"
					,txt: "-"
					,clss: "contRespThird"
				},{
					id:"C73"
					,txt: "20.0"
					,clss: "contRespThird"
				}]				
			},{
				id: "A74"
				,txt: "Feed pipe flow pattern"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B74"
					,txt: "-"
					,clss: "contRespThird"
				},{
					id:"C74"
					,txt: "Slup"
					,clss: "contRespThird"
				}]				
			},{
				id: "A75"
				,txt: "Feed pipe ρV2, lb/ft-sec^2"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B75"
					,txt: "2000"
					,clss: "contRespThird"
				},{
					id:"C75"
					,txt: "2000"
					,clss: "contRespThird"
				}]				
			},{
				id: "A76"
				,txt: "Slug size, bbl"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B76"
					,txt: "5.10"
					,clss: "contRespThird"
				},{
					id:"C76"
					,txt: "5.00"
					,clss: "contRespThird"
				}]				
			},{
				id: "A77"
				,txt: "Entrainment fraction in feed pipe"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B77"
					,txt: "-"
					,clss: "contRespThird"
				},{
					id:"C77"
					,txt: "5.5%"
					,clss: "contRespThird"
				}]				
			},{
				id: "A78"
				,txt: "Entrainment in feed pipe, gal/MMSCF"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B78"
					,txt: "-"
					,clss: "contRespThird"
				},{
					id:"C78"
					,txt: "20.0"
					,clss: "contRespThird"
				}]				
			},{
				id: "A79"
				,txt: "Inlet device separation efficiency"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B79"
					,txt: "-"
					,clss: "contRespThird"
				},{
					id:"C79"
					,txt: "90.0%"
					,clss: "contRespThird"
				}]				
			},{
				id: "A80"
				,txt: "Entrained liquid exiting inlet device, gal/MMSCF"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B80"
					,txt: "-"
					,clss: "contRespThird"
				},{
					id:"C80"
					,txt: "50.2"
					,clss: "contRespThird"
				}]				
			},{
				id: "A81"
				,txt: "Plug flow Souders-Brown sizing coefficient in gas gravity separation section, Ks"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B81"
					,txt: "0.50"
					,clss: "contRespThird"
				},{
					id:"C81"
					,txt: "0.50"
					,clss: "contRespThird"
				}]				
			},{
				id: "A82"
				,txt: "Adjusted effective average gas velocity variation factor in gas gravity separation section, Vmax/Vavg, Fn"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B82"
					,txt: "-"
					,clss: "contRespThird"
				},{
					id:"C82"
					,txt: "1.50"
					,clss: "contRespThird"
				}]				
			},{
				id: "A83"
				,txt: "Souders-Brown sizing coefficient in gas gravity separation section adjusted for actual velocity, Ks"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B83"
					,txt: "-"
					,clss: "contRespThird"
				},{
					id:"C83"
					,txt: "0.90"
					,clss: "contRespThird"
				}]				
			},{
				id: "A84"
				,txt: "Separable oil droplet size from gas in gas gravity separation section, microns"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B84"
					,txt: "-"
					,clss: "contRespThird"
				},{
					id:"C84"
					,txt: "1500"
					,clss: "contRespThird"
				}]				
			},{
				id: "A85"
				,txt: "Gas gravity separation section droplet removal efficiency"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B85"
					,txt: "-"
					,clss: "contRespThird"
				},{
					id:"C85"
					,txt: "50%"
					,clss: "contRespThird"
				}]				
			},{
				id: "A86"
				,txt: "Liquid content of gas to primary mist extractor, gal/MMSCF"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B86"
					,txt: "-"
					,clss: "contRespThird"
				},{
					id:"C86"
					,txt: "30.2"
					,clss: "contRespThird"
				}]				
			},{
				id: "A87"
				,txt: "Liquid content of gas to primary mist extractor, gpm/ft2"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B87"
					,txt: "-"
					,clss: "contRespThird"
				},{
					id:"C87"
					,txt: "0.05"
					,clss: "contRespThird"
				}]				
			},{
				id: "A88"
				,txt: "Primary mist extractor Ks (actual velocity), ft/sec"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B88"
					,txt: "0.30"
					,clss: "contRespThird"
				},{
					id:"C88"
					,txt: "0.30"
					,clss: "contRespThird"
				}]				
			},{
				id: "A89"
				,txt: "Primary mist extractor separation efficiency"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B89"
					,txt: "-"
					,clss: "contRespThird"
				},{
					id:"C89"
					,txt: "90.0%"
					,clss: "contRespThird"
				}]				
			},{
				id: "A90"
				,txt: "Liquid content of gas to secondary mist extractor, gal/MMSCF"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B90"
					,txt: "-"
					,clss: "contRespThird"
				},{
					id:"C90"
					,txt: "1.00"
					,clss: "contRespThird"
				}]				
			},{
				id: "A91"
				,txt: "Secondary mist extractor Ks (actual velocity), ft/sec"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B91"
					,txt: "NA"
					,clss: "contRespThird"
				},{
					id:"C91"
					,txt: "NA"
					,clss: "contRespThird"
				}]				
			},{
				id: "A92"
				,txt: "Secondary mist extractor separation efficiency"
				,clss: "spanRespHalf"
				,resp: [{
					id:"B92"
					,txt: "-"
					,clss: "contRespThird"
				},{
					id:"C92"
					,txt: "NA"
					,clss: "contRespThird"
				}]				
			}];

			self.spResDiv = self._CreateResponseLabel("spResContainer", items);
			var divHHelper = self._CreateDiv("");
			divHHelper.append(self._CreateHeader("Separation Performance").attr({"class": "header"}));
			self.spResDiv.prepend(divHHelper);			
		}
		,CreateVesselResDiv: function () {
			var self = this;

			var items = [{
				id: "G14"
				,txt: "Vessel inside diameter, ft"
				,clss: "spanResp"
				,resp: [{
					id:"H14"
					,txt: "6.0"
					,clss: "contResp"
				}]				
			},{
				id: "G15"
				,txt: "Calculated outside diameter, ft"
				,clss: "spanResp"
				,resp: [{
					id:"H15"
					,txt: "5.50"
					,clss: "contResp"
				}]				
			},{
				id: "G16"
				,txt: "Average vessel diameter, Dm, ft"
				,clss: "spanResp"
				,resp: [{
					id:"H16"
					,txt: "5.15"
					,clss: "contResp"
				}]				
			},{
				id: "G17"
				,txt: "Calculated vessel length, s/s, ft"
				,clss: "spanResp"
				,resp: [{
					id:"H17"
					,txt: "7.30"
					,clss: "contResp"
				}]				
			},{
				id: "G18"
				,txt: "Vessel L/D"
				,clss: "spanResp"
				,resp: [{
					id:"H18"
					,txt: "1.00"
					,clss: "contResp"
				}]				
			},{
				id: "G19"
				,txt: "Shell thickness incl. ca, in"
				,clss: "spanResp"
				,resp: [{
					id:"H19"
					,txt: "2.10"
					,clss: "contResp"
				}]				
			},{
				id: "G20"
				,txt: "Head thickness incl. ca, in"
				,clss: "spanResp"
				,resp: [{
					id:"H20"
					,txt: "2.05"
					,clss: "contResp"
				}]				
			},{
				id: "G21"
				,txt: "Vessel weight, lb"
				,clss: "spanResp"
				,resp: [{
					id:"H21"
					,txt: "20,000"
					,clss: "contResp"
				}]				
			},{
				id: "G24"
				,txt: "Vessel cost, C, $"
				,clss: "spanResp"
				,resp: [{
					id:"H24"
					,txt: "196,000"
					,clss: "contResp"
				}]				
			}];
			
			self.cvResDiv = self._CreateResponseLabel("cvResContainer", items);
			var divHHelper = self._CreateDiv("");
			divHHelper.append(self._CreateHeader("Calculated Vessel Dimensions").attr({"class": "header"}));
			self.cvResDiv.prepend(divHHelper);
		}
		,CreateConstrainsResDiv: function () {
			var self = this;

			var items = [{
				id: "G28"
				,txt: "Max outside diameter, ft"
				,clss: "spanResp"
				,resp: [{
					id:"H28"
					,txt: "-13.00"
					,clss: "contResp"
				}]				
			},{
				id: "G29"
				,txt: "Max vessel length, ft"
				,clss: "spanResp"
				,resp: [{
					id:"H29"
					,txt: "-70.00"
					,clss: "contResp"
				}]				
			},{
				id: "G30"
				,txt: "Min distance between inlet device and mist extractor (vertical), ft"
				,clss: "spanResp"
				,resp: [{
					id:"H30"
					,txt: "90.00"
					,clss: "contResp"
				}]				
			},{
				id: "G31"
				,txt: "Vessel max L/D"
				,clss: "spanResp"
				,resp: [{
					id:"H31"
					,txt: "-8.00"
					,clss: "contResp"
				}]				
			},{
				id: "G32"
				,txt: "Vessel min L/D"
				,clss: "spanResp"
				,resp: [{
					id:"H32"
					,txt: "-1.10"
					,clss: "contResp"
				}]				
			},{
				id: "G33"
				,txt: "Liquid carryover, gal/MMSCF"
				,clss: "spanResp"
				,resp: [{
					id:"H33"
					,txt: "-0.001"
					,clss: "contResp"
				}]				
			},{
				id: "G34"
				,txt: "Gas gravity sep'n section Ks, ft sec"
				,clss: "spanResp"
				,resp: [{
					id:"H34"
					,txt: "-0.20"
					,clss: "contResp"
				}]				
			},{
				id: "G35"
				,txt: "Min diameter to accomm. Horiz mist extractor (vertical), ft"
				,clss: "spanResp"
				,resp: [{
					id:"H35"
					,txt: "90,000"
					,clss: "contResp"
				}]				
			},{
				id: "G36"
				,txt: "Primary mist extractor Ks, ft/sec"
				,clss: "spanResp"
				,resp: [{
					id:"H36"
					,txt: "1.00"
					,clss: "contResp"
				}]				
			},{
				id: "G37"
				,txt: "Re-entrainment constraint, Vr, ft/sec"
				,clss: "spanResp"
				,resp: [{
					id:"H37"
					,txt: "-0.30"
					,clss: "contResp"
				}]				
			},{
				id: "G38"
				,txt: "Separable gas bubble size, microns"
				,clss: "spanResp"
				,resp: [{
					id:"H38"
					,txt: "-450"
					,clss: "contResp"
				}]				
			},{
				id: "G39"
				,txt: "Free gas in separated oil, volume %"
				,clss: "spanResp"
				,resp: [{
					id:"H39"
					,txt: "2.00%"
					,clss: "contResp"
				}]				
			},{
				id: "G40"
				,txt: "Corrected oil residence time (NLL), min"
				,clss: "spanResp"
				,resp: [{
					id:"H40"
					,txt: "1.50"
					,clss: "contResp"
				}]				
			},{
				id: "G41"
				,txt: "Max horizontal oil velocity (horizontal), ft/sec"
				,clss: "spanResp"
				,resp: [{
					id:"H41"
					,txt: "-0.20"
					,clss: "contResp"
				}]				
			},{
				id: "G42"
				,txt: "Max HLSD/Di (horizontal)"
				,clss: "spanResp"
				,resp: [{
					id:"H42"
					,txt: "-0.05"
					,clss: "contResp"
				}]				
			},{
				id: "G43"
				,txt: "Min gas space height Di-HLSD (horizontal), ft"
				,clss: "spanResp"
				,resp: [{
					id:"H43"
					,txt: "0.10"
					,clss: "contResp"
				}]				
			},{
				id: "G44"
				,txt: "Min distance between HLSD and mist extractor (horizontal), ft"
				,clss: "spanResp"
				,resp: [{
					id:"H44"
					,txt: "-0.90"
					,clss: "contResp"
				}]				
			}];
		
			self.coResDiv = self._CreateResponseLabel("coResContainer", items);
			var divHHelper = self._CreateDiv("");
			divHHelper.append(self._CreateHeader("Constraints").attr({"class": "header"}));
			self.coResDiv.prepend(divHHelper);
		}
		,CreateNozzleResDiv: function () {
			var self = this;

			var items = [{
				id: "G49"
				,txt: ""
				,clss: "spanRespHalf"
				,resp: [{
					id:"H28"
					,txt: "Size, in"
					,clss: "contRespThird"
				},{
					id:"I28"
					,txt: "Inlet flow pattern"
					,clss: "contRespThird"
				}]				
			},{
				id: "G51"
				,txt: "Inlet nozzle"
				,clss: "spanRespHalf"
				,resp: [{
					id:"H51"
					,txt: "15"
					,clss: "contRespThird"
				},{
					id:"I51"
					,txt: "Slug"
					,clss: "contRespThird"
				}]			
			},{
				id: "G52"
				,txt: "Gas outlet nozzle"
				,clss: "spanRespHalf"
				,resp: [{
					id:"H52"
					,txt: "15"
					,clss: "contRespThird"
				},{
					id:"I52"
					,txt: ""
					,clss: "contRespThird"
				}]			
			},{
				id: "G53"
				,txt: "Oil outlet nozzle"
				,clss: "spanRespHalf"
				,resp: [{
					id:"H53"
					,txt: "5"
					,clss: "contRespThird"
				},{
					id:"I53"
					,txt: ""
					,clss: "contRespThird"
				}]
			}];				

			self.noResDiv = self._CreateResponseLabel("noResContainer", items);
			var divHHelper = self._CreateDiv("");
			divHHelper.append(self._CreateHeader("Nozzles").attr({"class": "header"}));
			self.noResDiv.prepend(divHHelper);			
		}
		,CreateLevelResDiv: function () {
			var self = this;

			var items = [{
				id: "G59"
				,txt: "Vessel ID (horizontal), ft"
				,clss: "spanRespHalf"
				,resp: [{
					id:"H59"
					,txt: "5"
					,clss: "contRespThird"
				},{
					id:"I59"
					,txt: "90%"
					,clss: "contRespThird"
				}]				
			},{
				id: "G60"
				,txt: "HLSD, ft"
				,clss: "spanRespHalf"
				,resp: [{
					id:"H60"
					,txt: "5"
					,clss: "contRespThird"
				},{
					id:"I60"
					,txt: "70%"
					,clss: "contRespThird"
				}]				
			},{
				id: "G61"
				,txt: "HLA, ft"
				,clss: "spanRespHalf"
				,resp: [{
					id:"H61"
					,txt: "5"
					,clss: "contRespThird"
				},{
					id:"I61"
					,txt: "90%"
					,clss: "contRespThird"
				}]				
			},{
				id: "G62"
				,txt: "NLL, ft"
				,clss: "spanRespHalf"
				,resp: [{
					id:"H62"
					,txt: "5"
					,clss: "contRespThird"
				},{
					id:"I62"
					,txt: "90%"
					,clss: "contRespThird"
				}]			
			},{
				id: "G63"
				,txt: "LLA, ft"
				,clss: "spanRespHalf"
				,resp: [{
					id:"H63"
					,txt: "5"
					,clss: "contRespThird"
				},{
					id:"I63"
					,txt: "90%"
					,clss: "contRespThird"
				}]			
			},{
				id: "G64"
				,txt: "LLA, ft"
				,clss: "spanRespHalf"
				,resp: [{
					id:"H64"
					,txt: "5"
					,clss: "contRespThird"
				},{
					id:"I64"
					,txt: "90%"
					,clss: "contRespThird"
				}]						
			}];

			self.leResDiv = self._CreateResponseLabel("leResContainer", items);
			var divHHelper = self._CreateDiv("");
			divHHelper.append(self._CreateHeader("Levels").attr({"class": "header"}));
			self.leResDiv.prepend(divHHelper);				
		}
		,CreateBackButton: function () {
			var self = this;
			return self._CreateButton("btnBack", "Back", self._Back);			
		}
		,ToogleClass: function (divs, clss) {
			
			for(var d in divs) {
				$("#"+divs[d]).toggleClass(clss);
			}
		}
		//Private Methods
		,_PrepareData: function () {
			var m = {}
			
			m.B3 = filterFloat($("#B3").val());
            m.B7 = filterFloat($("#B7").val());
            m.B8 = filterFloat($("#B8").val());
            m.B11 = filterFloat($("#B11").val());
            m.B14 = filterFloat($("#B14").val());
            m.B15 = filterFloat($("#B15").val());
            m.B16 = filterFloat($("#B16").val());
            m.B18 = filterFloat($("#B18").val());
            m.B20 = filterFloat($("#B20").val());
            m.B21 = filterFloat($("#B21").val());
            m.B23 = filterFloat($("#B23").val());
            m.B26 = filterFloat($("#B26").val());
            m.B29 = filterFloat($("#B29").val());
            m.B30 = filterFloat($("#B30").val());
            m.B31 = filterFloat($("#B31").val());

            m.B48 = filterFloat($("#B48").val());
            m.B68 = filterFloat($("#B68").val());
            m.B69 = filterFloat($("#B69").val());
            m.B70 = filterFloat($("#B70").val());
            m.B71 = filterFloat($("#B71").val());
            m.B72 = filterFloat($("#B72").val());
            m.B81 = filterFloat($("#B81").val());

            m.C101 = filterFloat($("#C101").val());
           	m.C102 = filterFloat($("#C102").val());
            m.C103 = filterFloat($("#C103").val());
            m.C104 = filterFloat($("#C104").val());
            m.C105 = filterFloat($("#C105").val());
            m.E101 = filterFloat($("#E101").val());
            m.E102 = filterFloat($("#E102").val());
            m.E103 = filterFloat($("#E103").val());
            m.E104 = filterFloat($("#E104").val());
            m.E105 = filterFloat($("#E105").val());
            m.F101 = filterFloat($("#F101").val());
            m.F102 = filterFloat($("#F102").val());
            m.F103 = filterFloat($("#F103").val());
            m.F104 = filterFloat($("#F104").val());
            m.F105 = filterFloat($("#F105").val());
            m.G101 = filterFloat($("#G101").val());
            m.G102 = filterFloat($("#G102").val());
            m.G103 = filterFloat($("#G103").val());
            m.G104 = filterFloat($("#G104").val());
            m.G105 = filterFloat($("#G105").val());
            m.H101 = filterFloat($("#H101").val());
            m.H102 = filterFloat($("#H102").val());
            m.H103 = filterFloat($("#H103").val());
            m.H104 = filterFloat($("#H104").val());
            m.H105 = filterFloat($("#H105").val());
            m.I101 = filterFloat($("#I101").val());
            m.I102 = filterFloat($("#I102").val());
            m.I103 = filterFloat($("#I103").val());
            m.I104 = filterFloat($("#I104").val());
            m.I105 = filterFloat($("#I105").val());

            m.A108 = filterFloat($("#A108").val());

            m.B113 = filterFloat($("#B113").val());
            m.B114 = filterFloat($("#B114").val());
            m.B115 = filterFloat($("#B115").val());
            m.C113 = filterFloat($("#C113").val());
            m.C114 = filterFloat($("#C114").val());
            m.C115 = filterFloat($("#C115").val());
            m.D113 = filterFloat($("#D113").val());
            m.D114 = filterFloat($("#D114").val());
            m.D115 = filterFloat($("#D115").val());
            
            m.A131 = filterFloat($("#A131").val());
			m.C123 = filterFloat($("#C123").val());
            m.C124 = filterFloat($("#C124").val());
            m.C125 = filterFloat($("#C125").val());
            m.C126 = filterFloat($("#C126").val());
            m.C127 = filterFloat($("#C127").val());            
            m.A143 = filterFloat($("#A143").val());
			m.C136 = filterFloat($("#C136").val());
            m.C137 = filterFloat($("#C137").val());
            m.C138 = filterFloat($("#C138").val());
            m.C139 = filterFloat($("#C139").val());
            m.A155 = filterFloat($("#A155").val());
			m.C149 = filterFloat($("#C149").val());
            m.C150 = filterFloat($("#C150").val());
            m.C151 = filterFloat($("#C151").val());

            m.B514 = filterFloat($("#B514").val());
            m.C514 = filterFloat($("#C514").val());

            m.RunSolver = $('#RunSolver').is(":checked")

			return JSON.stringify(m);
		}
		,_BindGet: function (model) {
			$("#B3").val(model.B3);
            $("#B7").val(model.B7);
            $("#B8").val(model.B8);
            $("#B11").val(model.B11);
            $("#B14").val(model.B14);
            $("#B15").val(model.B15);
            $("#B16").val(model.B16);
            $("#B18").val(model.B18);
            $("#B20").val(model.B20);
            $("#B21").val(model.B21);
            $("#B23").val(model.B23);
            $("#B26").val(model.B26);
            $("#B29").val(model.B29);
            $("#B30").val(model.B30);
            $("#B31").val(model.B31);

            $("#B48").val(model.B48);
            $("#B68").val(model.B68);
            $("#B69").val(model.B69);
            $("#B70").val(model.B70);
            $("#B71").val(model.B71);
            $("#B72").val(model.B72);
            $("#B81").val(model.B81);

            $("#C101").val(model.C101);
            $("#C102").val(model.C102);
            $("#C103").val(model.C103);
            $("#C104").val(model.C104);
            $("#C105").val(model.C105);
            $("#E101").val(model.E101);
            $("#E102").val(model.E102);
            $("#E103").val(model.E103);
            $("#E104").val(model.E104);
            $("#E105").val(model.E105);
            $("#F101").val(model.F101);
            $("#F102").val(model.F102);
            $("#F103").val(model.F103);
            $("#F104").val(model.F104);
            $("#F105").val(model.F105);
            $("#G101").val(model.G101);
            $("#G102").val(model.G102);
            $("#G103").val(model.G103);
            $("#G104").val(model.G104);
            $("#G105").val(model.G105);
            $("#H101").val(model.H101);
            $("#H102").val(model.H102);
            $("#H103").val(model.H103);
            $("#H104").val(model.H104);
            $("#H105").val(model.H105);
            $("#I101").val(model.I101);
            $("#I102").val(model.I102);
            $("#I103").val(model.I103);
            $("#I104").val(model.I104);
            $("#I105").val(model.I105);

            $("#A108").val(model.A108).change();

            $("#B113").val(model.B113);
            $("#B114").val(model.B114);
            $("#B115").val(model.B115);
            $("#C113").val(model.C113);
            $("#C114").val(model.C114);
            $("#C115").val(model.C115);
            $("#D113").val(model.D113);
            $("#D114").val(model.D114);
            $("#D115").val(model.D115);
            
			$("#C123").val(model.C123);
            $("#C124").val(model.C124);
            $("#C125").val(model.C125);
            $("#C126").val(model.C126);
            $("#C127").val(model.C127);           
			$("#C136").val(model.C136);
            $("#C137").val(model.C137);
            $("#C138").val(model.C138);
            $("#C139").val(model.C139);
			$("#C149").val(model.C149);
            $("#C150").val(model.C150);
            $("#C151").val(model.C151);


			$("#A131").val(model.A131).change();
            $("#A143").val(model.A143).change();
            $("#A155").val(model.A155).change();
            $("#B514").val(model.B514).change();
            $("#C514").val(model.C514).change();

            $("#RunSolver").attr({"checked": model.RunSolver});
		}
		,_BindPost: function (model) {
            $("#B68lbl").text(isNumber(model.B68) ? model.B68.toFixedDown(4) : model.B69);
            $("#B69lbl").text(isNumber(model.B69) ? model.B69.toPercent() : model.B69);
            $("#B70lbl").text(isNumber(model.B70) ? model.B70.toFixedDown(4) : model.B70);
            $("#B71lbl").text(isNumber(model.B71) ? model.B71.toFixedDown(4) : model.B71);
            $("#B72lbl").text(isNumber(model.B72) ? model.B72.toFixedDown(4) : model.B72);
            $("#B75lbl").text(isNumber(model.B75) ? model.B75.toFixedDown(4) : model.B75);
            $("#B76lbl").text(isNumber(model.B76) ? model.B76.toFixedDown(4) : model.B76);
            $("#B81lbl").text(isNumber(model.B81) ? model.B81.toFixedDown(4) : model.B81);
            $("#B88lbl").text(isNumber(model.B88) ? model.B88.toFixedDown(4) : model.B88);
            $("#B91lbl").text(isNumber(model.B91) ? model.B91.toFixedDown(4) : model.B91);
            
            $("#C68lbl").text(isNumber(model.C68) ? model.C68.toFixedDown(4) : model.C68);
            $("#C69lbl").text(isNumber(model.C69) ? model.C69.toPercent() : model.C69);
            $("#C70lbl").text(isNumber(model.C70) ? model.C70.toFixedDown(4) : model.C70);
            $("#C71lbl").text(isNumber(model.C71) ? model.C71.toFixedDown(4) : model.C71);
            $("#C72lbl").text(isNumber(model.C72) ? model.C72.toFixedDown(4) : model.C72);
            $("#C73lbl").text(isNumber(model.C73) ? model.C73.toFixedDown(4) : model.C73);
            $("#C74lbl").text(model.C74);
            $("#C75lbl").text(isNumber(model.C75) ? model.C75.toFixedDown(4) : model.C75);
            $("#C76lbl").text(isNumber(model.C76) ? model.C76.toFixedDown(4) : model.C76);
            $("#C77lbl").text(isNumber(model.C77) ? model.C77.toPercent() : model.C77);
            $("#C78lbl").text(isNumber(model.C78) ? model.C78.toFixedDown(4) : model.C78);
            $("#C79lbl").text(isNumber(model.C79) ? model.C79.toPercent() : model.C79);
            $("#C80lbl").text(isNumber(model.C80) ? model.C80.toFixedDown(4) : model.C80);
            $("#C81lbl").text(isNumber(model.C81) ? model.C81.toFixedDown(4) : model.C81);
            $("#C82lbl").text(isNumber(model.C82) ? model.C82.toFixedDown(4) : model.C82);
            $("#C83lbl").text(isNumber(model.C83) ? model.C83.toFixedDown(4) : model.C83);
            $("#C84lbl").text(isNumber(model.C84) ? model.C84.toFixedDown(4) : model.C84);
            $("#C85lbl").text(isNumber(model.C85) ? model.C85.toPercent() : model.C85);
            $("#C86lbl").text(isNumber(model.C86) ? model.C86.toFixedDown(4) : model.C86);
            $("#C87lbl").text(isNumber(model.C87) ? model.C87.toFixedDown(4) : model.C87);
            $("#C88lbl").text(isNumber(model.C88) ? model.C88.toFixedDown(4) : model.C88);
            $("#C89lbl").text(isNumber(model.C89) ? model.C89.toPercent() : model.C89);
            $("#C90lbl").text(isNumber(model.C90) ? model.C90.toFixedDown(4) : model.C90);
            $("#C91lbl").text(isNumber(model.C91) ? model.C91.toFixedDown(4) : model.C91);
            $("#C92lbl").text(isNumber(model.C92) ? model.C92.toFixedDown(4) : model.C92);
            
            $("#H14lbl").text(isNumber(model.H14) ? model.H14.toFixedDown(4) : model.H14);
            $("#H15lbl").text(isNumber(model.H15) ? model.H15.toFixedDown(4) : model.H15);
            $("#H16lbl").text(isNumber(model.H16) ? model.H16.toFixedDown(4) : model.H16);
            $("#H17lbl").text(isNumber(model.H17) ? model.H17.toFixedDown(4) : model.H17);
            $("#H18lbl").text(isNumber(model.H18) ? model.H18.toFixedDown(4) : model.H18);
            $("#H19lbl").text(isNumber(model.H19) ? model.H19.toFixedDown(4) : model.H19);
            $("#H20lbl").text(isNumber(model.H20) ? model.H20.toFixedDown(4) : model.H20);
            $("#H21lbl").text(isNumber(model.H21) ? model.H21.toFixedDown(4) : model.H21);
            $("#H24lbl").text(isNumber(model.H24) ? toCurrency(model.H24) : model.H24);

            $("#H28lbl").text(isNumber(model.H28) ? model.H28.toFixedDown(4) : model.H28);
            $("#H29lbl").text(isNumber(model.H29) ? model.H29.toFixedDown(4) : model.H29);
            $("#H30lbl").text(isNumber(model.H30) ? model.H30.toFixedDown(4) : model.H30);
            $("#H31lbl").text(isNumber(model.H31) ? model.H31.toFixedDown(4) : model.H31);
            $("#H32lbl").text(isNumber(model.H32) ? model.H32.toFixedDown(4) : model.H32);
            $("#H33lbl").text(isNumber(model.H33) ? model.H33.toFixedDown(4) : model.H33);
            $("#H34lbl").text(isNumber(model.H34) ? model.H34.toFixedDown(4) : model.H34);
            $("#H35lbl").text(isNumber(model.H35) ? model.H35.toFixedDown(4) : model.H35);
            $("#H36lbl").text(isNumber(model.H36) ? model.H36.toFixedDown(4) : model.H36);
            $("#H37lbl").text(isNumber(model.H37) ? model.H37.toFixedDown(4) : model.H37);
            $("#H38lbl").text(isNumber(model.H38) ? model.H38.toFixedDown(4) : model.H38);
            $("#H39lbl").text(isNumber(model.H39) ? model.H39.toPercent() : model.H39);
            $("#H40lbl").text(isNumber(model.H40) ? model.H40.toFixedDown(4) : model.H40);
            $("#H41lbl").text(isNumber(model.H41) ? model.H41.toFixedDown(4) : model.H41);
            $("#H42lbl").text(isNumber(model.H42) ? model.H42.toFixedDown(4) : model.H42);
            $("#H43lbl").text(isNumber(model.H43) ? model.H43.toFixedDown(4) : model.H43);
            $("#H44lbl").text(isNumber(model.H44) ? model.H44.toFixedDown(4) : model.H44);

            $("#H51lbl").text(isNumber(model.H51) ? model.H51.toFixedDown(4) : model.H51);
            $("#H52lbl").text(isNumber(model.H52) ? model.H52.toFixedDown(4) : model.H52);
            $("#H53lbl").text(isNumber(model.H53) ? model.H53.toFixedDown(4) : model.H53);

            $("#H59lbl").text(isNumber(model.H59) ? model.H59.toFixedDown(4) : model.H59);
            $("#H60lbl").text(isNumber(model.H60) ? model.H60.toFixedDown(4) : model.H60);
            $("#H61lbl").text(isNumber(model.H61) ? model.H61.toFixedDown(4) : model.H61);
            $("#H62lbl").text(isNumber(model.H62) ? model.H62.toFixedDown(4) : model.H62);
            $("#H63lbl").text(isNumber(model.H63) ? model.H63.toFixedDown(4) : model.H63);
            $("#H64lbl").text(isNumber(model.H64) ? model.H64.toFixedDown(4) : model.H64);

            $("#I59lbl").text(isNumber(model.I59) ? model.I59.toPercent() : model.I59);
            $("#I60lbl").text(isNumber(model.I60) ? model.I60.toPercent() : model.I60);
            $("#I61lbl").text(isNumber(model.I61) ? model.I61.toPercent() : model.I61);
            $("#I62lbl").text(isNumber(model.I62) ? model.I62.toPercent() : model.I62);
            $("#I63lbl").text(isNumber(model.I63) ? model.I63.toPercent() : model.I63);
            $("#I64lbl").text(isNumber(model.I64) ? model.I64.toPercent() : model.I64);
		}
		,_Back: function (e, c) {
			var self = c;
			e.preventDefault();
			$("html, body").scrollTop(0);
			self.ToogleClass(["postDiv", "getDiv"], "hide");
		}
		,_CreateDiv: function (id) {
			return $(document.createElement("div")).attr("id", id);
		}
		,_CreateSpan: function (id, text) {
			return $(document.createElement("span")).attr("id", id).text(text);
		}
		,_CreateHeader: function (txt) {
			return $(document.createElement("h5")).text(txt);
		}		
		,_CreateButton: function (id, text, f) {

            var self = this;

            var button = $(document.createElement("button"))
            .attr({
                "id": id
                //,"class": elementClassButton
            })
            .text(text)
            .click(function (e) {
                f(e, self);
            });

            return button;
		}
		,_CreateInput: function (id, text) {
			var self = this;

			var labelfor = $(document.createElement("label"))
			.attr({
				"for": id,
				"class": "inputLabel"
			})
			.text(text);

			var input = $(document.createElement("input"))
			.attr({
				"id": id
				,"type": "text"
				,"name": id +"input",
				"class": "inputBox"
			});
			//.on()

			var innerDiv = $(document.createElement("div"))
			.attr({
				"id": id + "Div",
				"class": "inputContainer"
			})
			.append(labelfor)
			.append(input);

			return innerDiv;
		}
		,_CreateInptCombo: function(id, text, items) {
			var self = this;

			var labelfor = $(document.createElement("label"))
			.attr({
				"for": id,
				"class": "inputLabel"
			})
			.text(text);
			
			var combo = self._CreateComboBox(id, items).attr({"class": "inputCombo"});

			var innerDiv = $(document.createElement("div"))
			.attr({
				"id": id + "Div",
				"class": "inputContainer"
			})
			.append(labelfor)
			.append(combo);

			return innerDiv;
		}
		,_CreateComboBox: function (id, item) {
			var self = this;

			var combo = $(document.createElement("select"))
			.attr({
				"id": id
			});

			if(id === "B514" || id === "C514") {
				$("body").on("change", "#"+id, function(e) {
					self._ShowGralClassTables(e);
				});
			}

			if(id === "A131"|| id === "A143" || id === "A155") {
				$("body").on("change", "#"+id, function(e) {
					self._ShowExtractorSelection(e);
				});
			}			

			var len = item.length - 1;
			for(var i = 0; i <= len; i++) {
				var opt = $(document.createElement("option"))
				.attr({
					"value": item[i].vID
				}).text(item[i].text);
				combo.append(opt);
			}

			return combo;
		}
		,_ShowGralClassTables: function (e) {
			var self = this;

			var divs = ["#meMeshDiv", "#meVaneDiv", "#meCycloDiv"];
			var vals = [$("#B514").val(), $("#C514").val()];

			for(var d in divs) {
				$(divs[d]).addClass("hide");
			}

			for(var v in vals) {
				switch( parseInt(vals[v]))
				{
					case 1:
						$("#meMeshDiv").removeClass("hide"); break;
					case 2:
						$("#meVaneDiv").removeClass("hide"); break;
					case 3:
						$("#meCycloDiv").removeClass("hide"); break;
				}
			}
		}
		,_ShowExtractorSelection:  function (e) {
			var eID = e.target.id;

			if (eID === "A131") {
				var v = $("#A131").val();
				v++;
				var t = $("#MeshTable").find("tbody tr:nth-child("+(v)+")")
					.find("td");

				$("#B131").text($(t[1]).text());
				var cc = $(t[2]);
				$("#C131").text($("select", $(t[2]))[0].options[$("select", $(t[2])).val()].text);
			};

			if (eID === "A143") {
				var v = $("#A143").val();
				v++;
				var t = $("#VaneTable").find("tbody tr:nth-child("+v+")")
					.find("td");

				$("#B143").text($(t[1]).text());
				$("#C143").text($("select", $(t[2]))[0].options[$("select", $(t[2])).val()].text);
			};

			if (eID === "A155") {
				var v = $("#A155").val();
				v++;
				var t = $("#CycloTable").find("tbody tr:nth-child("+v+")")
					.find("td");

				$("#B155").text($(t[1]).text());
				$("#C155").text($("select", $(t[2]))[0].options[$("select", $(t[2])).val()].text);
			};
		}	
		,_CreateTableInput: function (id) {
			var input = $(document.createElement("input"))
			.attr({
				"id": id
				,"type": "text"
				,"name": id +"Input"
				,"class": "inputBox"
			});
			
			return input;	
		}
		,_CreateInletComboBox: function (id) {
			var self = this;

			var div = self._CreateDiv(id+"Div");
			var combo = $(document.createElement("select"))
			.attr({
				"id": id
			});

			$("body").on("change", "#"+id, function(e) {
				var eID = e.target.id;

				if(eID === "A108"){
					var v = $("#"+eID).val();
					var t = $("#inDivTable").find("tbody tr:nth-child("+v+")")
					.find("td");

					$("#B108").text($(t[1]).text());
					$("#C108").text($($('input', t[2])).val());
					$("#E108").text($($('input', t[3])).val());
					$("#F108").text($($('input', t[4])).val());
					$("#G108").text($($('input', t[5])).val());
					$("#H108").text($($('input', t[6])).val());
					$("#I108").text($($('input', t[7])).val());

				}
			})

			var span = self._CreateSpan(id+"Span", "Selection").attr({"class": "tableSpanEnd"});

			for(var i = 1; i <= 5; i++) {
				var opt = $(document.createElement("option"))
				.attr({
					"value": i
				}).text(i);
				combo.append(opt);
			}
			div.append(span);
			div.append(combo);
			return div;
		}
		,_CreateInletTable: function (id, items) {
			var self = this;

			var table = $(document.createElement("table"))
			.attr({
				"id": id+"Table",
				"class": "full"
			});

			table.append("<thead>").children("thead")
           	 	.append("<tr />").children("tr").attr({"class": "nity"})
            		.append("<th>Identifier</th><th>Description</th>" + 
            			"<th class='tenth'>Rho-V^2 lb/ft-sec^2</th>" + 
            			"<th class='tenth'>Area change factor for liquid (exit of inlet device/feed pipe) at bottom of feed pipe elevation</th>" +
            			"<th class='tenth'>Minimum distance between HLSD and inlet device (Vertical) fraction of Vessel ID</th>" +
            			"<th class='tenth'>X2 (inlet device) fraction of inlet nozzle nominal diameter</th>" +
            			"<th class='tenth'>Minimum distance from inlet device to mist extractor (Vertical) fraction of vessel ID</th>" +
            			"<th class='tenth'>Weight lb/ft2 of nozzle area</th>");
		
			var tbody = table.append("<tbody>").children("tbody");
			var len = items.length - 1;
			
			for(var i = 0; i <= len; i++) {
				tbody.append("<tr />").children("tr:last")
				.append("<td>" + items[i].id + "</ td>"
				+ "<td>" + items[i].desc + "</ td>"
				+ "<td>" + self._CreateTableInput(items[i].rhoBID)[0].outerHTML.replaceAll('"',"'") + "</ td>"
				+ "<td>" + self._CreateTableInput(items[i].areaBID)[0].outerHTML.replaceAll('"',"'") + "</ td>"
				+ "<td>" + self._CreateTableInput(items[i].hlsdBID)[0].outerHTML.replaceAll('"',"'") + "</ td>"
				+ "<td>" + self._CreateTableInput(items[i].x2BID)[0].outerHTML.replaceAll('"',"'") + "</ td>"
				+ "<td>" + self._CreateTableInput(items[i].inletBID)[0].outerHTML.replaceAll('"',"'") + "</ td>"
				+ "<td>" + self._CreateTableInput(items[i].weightBID)[0].outerHTML.replaceAll('"',"'") + "</ td>");					
			};


			table.append("<tfoot>").children("tfoot")
				.append("<tr />").children("tr")
				.append("<th>" + self._CreateInletComboBox("A108")[0].outerHTML.replaceAll('"',"'") + "</ th>"
				+ "<th>" + self._CreateSpan("B108", "")[0].outerHTML.replaceAll('"',"'") + "</ th>"
				+ "<th>" + self._CreateSpan("C108", "")[0].outerHTML.replaceAll('"',"'") + "</ th>"
				+ "<th>" + self._CreateSpan("E108", "")[0].outerHTML.replaceAll('"',"'") + "</ th>"
				+ "<th>" + self._CreateSpan("F108", "")[0].outerHTML.replaceAll('"',"'") + "</ th>"
				+ "<th>" + self._CreateSpan("G108", "")[0].outerHTML.replaceAll('"',"'") + "</ th>"
				+ "<th>" + self._CreateSpan("H108", "")[0].outerHTML.replaceAll('"',"'") + "</ th>"
				+ "<th>" + self._CreateSpan("I108", "")[0].outerHTML.replaceAll('"',"'") + "</ th>");						

    		return table;
		}
		,_CreatePerfoTable: function (id, items) {
			var self = this;

			var table = $(document.createElement("table"))
			.attr({
				"id": id+"Table",
				"class": "full"
			});

			table.append("<thead>").children("thead")
           	 	.append("<tr />").children("tr")
            		.append("<th></th>" + 
            			"<th></th>" + 
            			"<th>Improvement</th>" +
            			'<th>Eu (20% open area, 0.25" thick)</th>');

			var tbody = table.append("<tbody>").children("tbody");
			var len = items.length - 1;

			for(var i = 0; i <= len; i++) {
				tbody.append("<tr />").children("tr:last")
				.append("<td>" + items[i].desc + "</ td>"
				+ "<td>" + self._CreateComboBox(items[i].boolBID, items[i].comboItems)[0].outerHTML.replaceAll('"',"'") + "</ td>"
				+ "<td>" + self._CreateTableInput(items[i].impBID)[0].outerHTML.replaceAll('"',"'") + "</ td>"
				+ "<td>" + self._CreateTableInput(items[i].EuBID)[0].outerHTML.replaceAll('"',"'") + "</ td>");					
			};

			return table;			
		}	
		,_CreateExtractorTable: function (id, items, comboIds, comboItems) {
			var self = this;

			var divHHelper = self._CreateDiv("me"+ id + "Div")
			.attr({
				"class": "hide full spaceBot"
			});
			divHHelper.append(self._CreateHeader(id).attr({"class": "header"}));
			self.meDiv.append(divHHelper);	

			var table = $(document.createElement("table"))
			.attr({
				"id": id+"Table",
				"class": "full spaceBot"
			});

			table.append("<thead>").children("thead")
           	 	.append("<tr />").children("tr")
            		.append("<th class='third'>Model</th>" 
            			+ "<th class='third'>Description</th>"
            			+ "<th class='third'>Flow direction V or H</th>");

			var tbody = table.append("<tbody>").children("tbody");
			var len = items.length - 1;

			for(var i = 0; i <= len; i++) {
				tbody.append("<tr />").children("tr:last")
				.append("<td class='third'>" + items[i].model + "</ td>"
				+ "<td class='third'>" + items[i].desc + "</ td>"
				+ "<td class='third'>" + self._CreateComboBox(items[i].flowBID, items[i].comboItems)[0].outerHTML.replaceAll('"',"'") + "</ td>");					
			};
			
			var selSpan = self._CreateSpan(comboIds.combo+"Span", "Selection").attr({"class": "tableSpanEnd"});			
			
			table.append("<tfoot>").children("tfoot")
				.append("<tr />").children("tr")
				.append("<th class='tableCombo third'>" + selSpan[0].outerHTML.replaceAll('"',"'") + self._CreateComboBox(comboIds.combo, comboItems)[0].outerHTML.replaceAll('"',"'") + "</ th>"
				+ "<th class='third'>" + self._CreateSpan(comboIds.desc, "")[0].outerHTML.replaceAll('"',"'") + "</ th>"
				+ "<th class='third'>" + self._CreateSpan(comboIds.flow, "")[0].outerHTML.replaceAll('"',"'") + "</ th>");			

			divHHelper.append(table);
			return divHHelper;
		}
		,_CreateMistExtratorSelector: function (id, items) {
			var self = this;

			var div = self._CreateDiv(id).attr({"class":"spaceBot"});

			var table = $(document.createElement("table")).attr({"class": "full"});

			table.append("<thead>").children("thead")
           	 	.append("<tr />").children("tr")
            		.append("<th class='noBorder'></th>" 
            			+ "<th class='noBorder'>Primary</th>"
            			+ "<th class='noBorder'>Secondary</th>");

			var tbody = table.append("<tbody>").children("tbody");
			var len = items.length - 1;

			for(var i = 0; i <= len; i++) {
				tbody.append("<tr />").children("tr:last")
				.append("<td class='tableLabel noBorder'>" + items[i].desc + "</ td>"
				+ "<td class='tableCombo noBorder'>" + self._CreateComboBox(items[i].primID, items[i].comboItems)[0].outerHTML.replaceAll('"',"'") + "</ td>"
				+ "<td class='tableCombo noBorder'>" + self._CreateComboBox(items[i].secID, items[i].comboItems)[0].outerHTML.replaceAll('"',"'") + "</ td>");					
			};

       		div.append(table);
			return div;
		}
		,_CreateResponseLabel: function (id, items) {
			var self = this;
			
			var respDiv = self._CreateDiv(id);

			for (var i in items) {
				var lblDiv = self._CreateDiv(items[i].id+"Container").attr({"class": "full miniSpace"});
				lblDiv.append(self._CreateSpan(items[i].id+"Span", items[i].txt).attr({"class": items[i].clss}));
				
				for(var r in items[i].resp) {
					lblDiv.append(self._CreateResponseLabelResult(items[i].resp[r].id, items[i].resp[r]));
				}

				respDiv.append(lblDiv);
			}

			return respDiv;
		}
		,_CreateResponseLabelResult: function (id, items) {
			var self = this;
			
			var lblDiv = self._CreateDiv(items.id+"Container").attr({"class": items.clss});
			lblDiv.append(self._CreateSpan(items.id+"lbl", items.txt));

			return lblDiv;
			
		}
	};
})(window.PS = window.PS || {}, jQuery);	
