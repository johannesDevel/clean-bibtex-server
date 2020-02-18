(window["webpackJsonpclean-bibtex"]=window["webpackJsonpclean-bibtex"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),s=n.n(i),c=(n(15),n(7)),o=n(6),l=n(1),u=n(2),h=n(4),d=n(3),p=n(5),m=(n(16),function(e){return new Promise(function(t){var n=new FileReader;n.onload=function(e){t(e.target.result)},n.readAsText(e)})});var g=function(e){return r.a.createElement("div",{className:"start-upload-button"},r.a.createElement("label",{htmlFor:"file"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),"Upload BibTeX"),r.a.createElement("input",{id:"file",className:"input-file",type:"file",onChange:function(t){var n=t.target.files[0];n&&m(n).then(function(t){t.length>3&&e.setBibtex(t)})}}))},f=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).onChangeText=function(e){n.setState({textInput:e},function(){return n.checkIfBibtex()})},n.checkIfBibtex=function(){n.state.textInput.length>30&&n.state.textInput.includes("@")?n.props.setBibtex(n.state.textInput):console.log("is not a bibtex, not sending to server")},n.state={isBibtex:!1,textInput:""},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"start-wrapper"},r.a.createElement("div",{className:"start"},r.a.createElement("div",{className:"start-inputs"},r.a.createElement("textarea",{className:"start-input-field",type:"text",placeholder:"Paste your BibTeX file here",value:this.state.bibtexText,onChange:function(t){return e.onChangeText(t.target.value)}}),r.a.createElement(g,{setBibtex:this.props.setBibtex}))))}}]),t}(a.Component);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var E=localStorage.token;E||(E=localStorage.token=Math.random().toString(36).substr(-8));var y={Accept:"application/json",Authorization:E},S=function(){return fetch("/bibtex",{headers:y}).then(function(e){return e.json()})},v=function(e){return fetch("/update",{method:"POST",headers:O({},y,{"Content-Type":"application/json"}),body:JSON.stringify(e)}).then(function(e){return e})},C=function(e){return fetch("/bibtex",{method:"POST",headers:O({},y,{"Content-Type":"application/json"}),body:JSON.stringify(e)}).then(function(e){return e.json()})},k=function(e,t){return fetch("".concat("https://api.crossref.org","/works?query.bibliographic=").concat(e,"&query.author=").concat(t,"&rows=1")).then(function(e){return e.json()})},A=function(e){return fetch("".concat("https://api.crossref.org","/works?query.bibliographic=").concat(e,"&rows=1")).then(function(e){return e.json()})};var T=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 50 50"},e),r.a.createElement("circle",{cx:25,cy:25,r:25,fill:"#d75a4a"}),r.a.createElement("path",{fill:"none",stroke:"#fff",strokeWidth:2,strokeLinecap:"round",strokeMiterlimit:10,d:"M16 34l9-9 9-9M16 16l9 9 9 9"}))};var N=function(e){return r.a.createElement("svg",Object.assign({viewBox:"0 0 50 50"},e),r.a.createElement("circle",{cx:25,cy:25,r:25,fill:"#25ae88"}),r.a.createElement("path",{fill:"none",stroke:"#fff",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,d:"M38 15L22 33l-10-8"}))},j=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){var e=n.props,t=e.label;(0,e.onClick)(t)},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.onClick,t=this.props,n=t.activeTab,a=t.label,i=t.status,s="tab-list-item";return n===a&&(s+=" tab-list-active"),r.a.createElement("li",{className:s,onClick:e},"".concat(a," "),i?r.a.createElement(N,{width:"20px",height:"20px"}):r.a.createElement(T,{width:"20px",height:"20px"}))}}]),t}(a.Component),F=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).onClickTab=function(e){return n.setState({activeTab:e})},n.state={activeTab:n.props.children[0].props.label},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.onClickTab,t=this.props.children,n=this.state.activeTab;return r.a.createElement("div",{className:"tabs"},r.a.createElement("ul",{className:"tab-list"},t.map(function(t){var a=t.props,i=a.label,s=a.status;return r.a.createElement(j,{activeTab:n,key:i,label:i,onClick:e,status:s})})),r.a.createElement("div",{className:"tab-content"},t.map(function(e){if(e.props.label===n)return e.props.children})))}}]),t}(a.Component),R=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={correctedElements:[],allSelected:!1},n.handleSaveSelection=function(){console.log(n.props.options)},n.selectAll=function(){var e=!n.state.allSelected;n.setState({allSelected:e}),n.props.changeAllOptions(e)},n.handleChangeOption=function(e){var t=n.props.optionsCheckboxes.find(function(t){return t.id===e});t.checked=!t.checked,n.props.changeOption(t)},n.changeSelected=function(e){(n.props.optionsCheckboxes.some(function(e){return e.checked})||n.state.allSelected)&&(n.props.changeSelectedCapitalization(e),n.setState({allSelected:!1}))},n.getCaseSum=function(){var e={titleCaseSum:0,sentenceCaseSum:0,noCaseSum:0};return n.props.entries.forEach(function(t){"titleCase"===t.capitalization?e.titleCaseSum++:"sentenceCase"===t.capitalization?e.sentenceCaseSum++:e.noCaseSum++}),e},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.entries,a=t.optionsCheckboxes;return r.a.createElement("div",null,r.a.createElement("div",{className:"statistic"},r.a.createElement("h3",null,"Summary"),r.a.createElement("ul",null,r.a.createElement("li",null,n.length," Entries found"),this.getCaseSum().titleCaseSum>0&&r.a.createElement("li",null,this.getCaseSum().titleCaseSum," Title case entries found"),this.getCaseSum().sentenceCaseSum>0&&r.a.createElement("li",null,this.getCaseSum().sentenceCaseSum," Sentence case entries found"),this.getCaseSum().noCaseSum>0&&r.a.createElement("li",null,this.getCaseSum().noCaseSum," without known case found"))),n.length>0&&r.a.createElement("div",{className:"corrections-table"},r.a.createElement("button",{className:"btn-select-all",disabled:!a.some(function(e){return e.checked}),onClick:function(){return e.changeSelected("titleCase")}},"Set selected to title case"),r.a.createElement("button",{className:"btn-select-all",disabled:!a.some(function(e){return e.checked}),onClick:function(){return e.changeSelected("sentenceCase")}},"Set selected to sentence case"),r.a.createElement("button",{className:"btn-select-all",disabled:!a.some(function(e){return e.checked}),onClick:function(){return e.changeSelected("initialCase")}},"Set selected to initial case"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("input",{type:"checkBox",name:"select-all-checkbox",checked:this.state.allSelected,onChange:function(){return e.selectAll()}})),r.a.createElement("th",null,"Current"),r.a.createElement("th",null,"Title case"),r.a.createElement("th",null,"Sentence case"))),n.map(function(t){return r.a.createElement("tbody",{key:t.id},r.a.createElement("tr",null,r.a.createElement("td",{className:"titleCase"===t.capitalization?"table-entry-green":"sentenceCase"===t.capitalization?"table-entry-blue":"table-entry-red"},r.a.createElement("center",null,r.a.createElement("input",{id:t.id,type:"checkBox",checked:a.find(function(e){return e.id===t.id}).checked,onChange:function(){return e.handleChangeOption(t.id)}}))),r.a.createElement("td",{className:"titleCase"===t.capitalization?"table-entry-green":"sentenceCase"===t.capitalization?"table-entry-blue":"table-entry-red"},t.TITLE),r.a.createElement("td",{className:"table-entry-green"},t.correctionTitleCase),r.a.createElement("td",{className:"table-entry-blue"},t.correctionSentenceCase)))}))))}}]),t}(a.Component),x=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={allSelected:!1},n.selectAll=function(){var e=!n.state.allSelected;n.setState({allSelected:e}),n.props.changeAllMandatoryFieldCheck(e)},n.getMissingFieldEntriesSum=function(){return n.props.entries.filter(function(e){return e.missingRequiredFields.length>0}).length},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"statistic"},r.a.createElement("h3",null,"Summary"),r.a.createElement("ul",null,r.a.createElement("li",null,this.props.entries.length," entries found"),this.getMissingFieldEntriesSum()>0&&r.a.createElement("li",null,"".concat(this.getMissingFieldEntriesSum()," entries with missing required fields found")))),this.props.entries.length>0&&r.a.createElement("div",{className:"corrections-table"},r.a.createElement("button",{onClick:function(){return e.props.searchMandatoryFieldSuggestion()},disabled:!this.props.entries.some(function(e){return e.mandatoryFieldsCheck})},"Search missing fields online"),r.a.createElement("button",{onClick:function(){e.setState({allSelected:!1}),e.props.removeNotMandatoryFields()},disabled:!this.props.entries.some(function(e){return e.mandatoryFieldsCheck})},"Remove not mandatory fields"),r.a.createElement("button",{disabled:!this.props.entries.some(function(e){return e.mandatoryFieldsCheck}),onClick:function(){e.setState({allSelected:!1}),e.props.addMissingFields()}},"Add field suggestion to entry"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("input",{type:"checkBox",name:"select-all-missing-fields-checkbox",checked:this.state.allSelected,onChange:function(){return e.selectAll()}})),r.a.createElement("th",null,"Current entry"),r.a.createElement("th",null,"Suggestion for missing fields"))),this.props.entries.map(function(t){return r.a.createElement("tbody",{key:t.id},r.a.createElement("tr",{className:0===t.missingRequiredFields.length?"table-entry-green":Object.keys(t.mandatoryFieldsSuggestions).length>0?"table-entry-blue":"table-entry-red"},r.a.createElement("td",null,r.a.createElement("input",{type:"checkBox",checked:t.mandatoryFieldsCheck,onChange:function(){return e.props.toggleMandatorFieldCheck(t.id)}})),r.a.createElement("td",null,Object.keys(t).filter(function(e){return e===e.toUpperCase()}).map(function(e){return r.a.createElement("div",{key:"".concat(t.id,"+").concat(e)},r.a.createElement("strong",null,e,": "),null==t[e]?"<EMPTY>":"AUTHOR"===e?t[e].map(function(e,n,a){return n===a.length-1?r.a.createElement("span",{key:t.id+e.name},e.name):r.a.createElement("span",{key:t.id+e.name},e.name," and"," ")}):r.a.createElement("span",null,t[e]))}),t.missingRequiredFields.length>0&&r.a.createElement("div",{className:"mandatory-missing-fields-text"},r.a.createElement("strong",null,"Missing required fields: "),t.missingRequiredFields.map(function(e){return r.a.createElement("span",{key:t.id+e},"".concat(e.toUpperCase(),", "))}))),r.a.createElement("td",null,Object.keys(t.mandatoryFieldsSuggestions).length>0?Object.keys(t.mandatoryFieldsSuggestions).map(function(e){return"AUTHOR"===e?r.a.createElement("div",{key:t.id+e},r.a.createElement("strong",null,e,": "),t.mandatoryFieldsSuggestions.AUTHOR.map(function(e,n,a){return r.a.createElement("span",{key:t.id+e.name},"".concat(e.name," ").concat(n===a.length-1?"":"and "))})):r.a.createElement("div",{key:t.id+e},r.a.createElement("strong",null,e,": "),t.mandatoryFieldsSuggestions[e])}):t.checkedSearched?"not found":"-")))}))))}}]),t}(a.Component),I=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={allSelected:!1},n.getInconsistentAuthorEntries=function(){return n.props.entries.filter(function(e){return null!=e.AUTHOR&&e.AUTHOR.some(function(e){return e.abbreviated||e.misspelling||e.changedAbbreviation||e.changedMisspelling})})},n.getInconsistentAuthorEntriesCount=function(){return n.props.entries.filter(function(e){return null!=e.AUTHOR&&e.AUTHOR.some(function(e){return e.abbreviated||e.misspelling})})},n.searchSuggestions=function(){n.props.changeAuthorSuggestion(n.props.authorNameOptions.filter(function(e){return e.checked}))},n.selectAll=function(){var e=!n.state.allSelected;n.setState({allSelected:e}),n.props.changeAllAuthorNameOptions(e)},n.checkCorrectedAuthors=function(e){return n.props.entries.some(function(t){return t.id===e.entryId&&t.AUTHOR.some(function(t){return e.author===t.name&&!t.abbreviated&&!t.misspelling})})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"statistic"},r.a.createElement("h3",null,"Summary"),r.a.createElement("ul",null,r.a.createElement("li",null,this.props.entries.length," entries found"),r.a.createElement("li",null,this.getInconsistentAuthorEntriesCount().length," entries with inconsistent author names found"))),this.getInconsistentAuthorEntries().length>0&&r.a.createElement("div",{className:"corrections-table"},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.setState({allSelected:!1},e.searchSuggestions())},disabled:!this.props.authorNameOptions.some(function(e){return e.checked})},"Search suggestion online"),r.a.createElement("button",{onClick:function(){return e.setState({allSelected:!1},e.props.searchSuggestionFile())},disabled:!this.props.authorNameOptions.some(function(e){return e.checked})},"Search suggestion in file"),r.a.createElement("button",{onClick:function(){return e.setState({allSelected:!1},e.props.changeAuthorName())},disabled:!this.props.authorNameOptions.some(function(e){return e.checked})},"Change author name to suggestion")),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("input",{type:"checkBox",name:"select-all-author-name-checkbox",checked:this.state.allSelected,onChange:function(){return e.selectAll()}})),r.a.createElement("th",null,"Current Author Name"),r.a.createElement("th",null,"Author Name Suggestion"),r.a.createElement("th",null,"Entry Title"))),this.props.authorNameOptions.map(function(t){return r.a.createElement("tbody",{key:"".concat(t.entryId,"+").concat(t.author)},r.a.createElement("tr",null,r.a.createElement("td",{className:e.checkCorrectedAuthors(t)?"table-entry-green":"table-entry-red"},r.a.createElement("center",null,r.a.createElement("input",{type:"checkBox",checked:t.checked,onChange:function(){return e.props.changeAuthorNameOption(t)}}))),r.a.createElement("td",{className:e.checkCorrectedAuthors(t)?"table-entry-green":"table-entry-red"},t.author),r.a.createElement("td",{className:e.checkCorrectedAuthors(t)?"table-entry-green":t.suggestion.length>0?"table-entry-blue":"table-entry-red"},null!=t.suggestion&&t.suggestion.length>0?t.suggestion[0]:"no suggestion found"),r.a.createElement("td",{className:"table-entry-grey"},t.title)))}))))}}]),t}(a.Component),M=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).downloadBibtex=function(e){if(console.log(e),null!=e&&null!=e.bibtex){var t=document.createElement("a"),n=new Blob([e.bibtex],{type:"text/plain"});t.href=URL.createObjectURL(n),t.download="changedBibTeX.bib",document.body.appendChild(t),t.click()}},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"start-wrapper"},r.a.createElement("div",{className:"start"},r.a.createElement("div",null,r.a.createElement(F,null,r.a.createElement("div",{label:"Capitalization",status:!this.props.entries.some(function(e){return"caseNotFound"===e.capitalization})},r.a.createElement(R,{entries:this.props.entries,optionsCheckboxes:this.props.capitalizationOptions,changeOption:this.props.changeOption,changeAllOptions:this.props.changeAllOptions,changeSelectedCapitalization:this.props.changeSelectedCapitalization})),r.a.createElement("div",{label:"Author name",status:0===this.props.entries.filter(function(e){return null!=e.AUTHOR&&e.AUTHOR.some(function(e){return e.abbreviated||e.misspelling})}).length},r.a.createElement(I,{entries:this.props.entries,getEntriesFromServer:this.props.getEntriesFromServer,changeAuthorName:this.props.changeAuthorName,changeAuthorSuggestion:this.props.changeAuthorSuggestion,authorNameOptions:this.props.authorNameOptions,changeAuthorNameOption:this.props.changeAuthorNameOption,changeAllAuthorNameOptions:this.props.changeAllAuthorNameOptions,searchSuggestionFile:this.props.searchSuggestionFile})),r.a.createElement("div",{label:"Mandatory fields",status:!this.props.entries.some(function(e){return e.missingRequiredFields.length>0})},r.a.createElement(x,{entries:this.props.entries,changeMandatoryFieldCheck:this.props.changeMandatoryFieldCheck,toggleMandatorFieldCheck:this.props.toggleMandatorFieldCheck,searchMandatoryFieldSuggestion:this.props.searchMandatoryFieldSuggestion,changeAllMandatoryFieldCheck:this.props.changeAllMandatoryFieldCheck,addMissingFields:this.props.addMissingFields,removeNotMandatoryFields:this.props.removeNotMandatoryFields})))),r.a.createElement("div",{className:"download-button-container"},r.a.createElement("button",{className:"download-button",disabled:null==this.props.entries||this.props.entries.length<=0,onClick:function(){return fetch("/changedBibtex",{headers:y}).then(function(e){return e.json()}).then(function(t){return e.downloadBibtex(t)})}},"Download changes as BibTeX"))))}}]),t}(a.Component),w=function(e,t){var n=["TITLE","AUTHOR","URL"];return"ARTICLE"===e&&(n=["TITLE","AUTHOR","JOURNAL","YEAR"]),"BOOK"===e&&(n=["TITLE","AUTHOR","PUBLISHER","YEAR"]),"BOOKLET"===e&&(n=["TITLE"]),"INBOOK"===e&&(n=["TITLE","AUTHOR","PUBLISHER","YEAR","CHAPTER"]),"INCOLLECTION"===e&&(n=["TITLE","AUTHOR","PUBLISHER","YEAR","BOOKTITLE"]),"INPROCEEDINGS"===e&&(n=["TITLE","AUTHOR","YEAR","BOOKTITLE"]),"MANUAL"===e&&(n=["TITLE"]),"MASTERTHESIS"===e&&(n=["TITLE","AUTHOR","SCHOOL","YEAR"]),"PHDTHESIS"===e&&(n=["TITLE","AUTHOR","SCHOOL","YEAR"]),"PROCEEDINGS"===e&&(n=["TITLE","YEAR"]),"TECHREPORT"===e&&(n=["TITLE","AUTHOR","JOURNAL","YEAR"]),"UNPUBLISHED"===e&&(n=["TITLE","AUTHOR","NOTE"]),t.filter(function(e){return!n.includes(e)})};function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var H=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={bibtexText:"",entries:[],capitalizationOptions:[],authorNameOptions:[]},n.setInitialAuthorNameOptions=function(e){return e.filter(function(e){return null!=e.AUTHOR&&e.AUTHOR.some(function(e){return e.abbreviated||e.misspelling||e.changedAbbreviation||e.changedMisspelling})}).flatMap(function(e){return e.AUTHOR.filter(function(e){return e.abbreviated||e.misspelling||e.changedAbbreviation||e.changedMisspelling}).map(function(t){return{entryId:e.id,title:e.TITLE,author:t.name,suggestion:t.suggestion,checked:!1}})}).sort(function(e,t){return e.author<t.author?-1:e.author>t.author?1:0})},n.getEntriesFromServer=function(){S().then(function(e){n.loadDataFromServer(e)})},n.getSelectedEntries=function(){return n.state.entries.filter(function(e){return n.state.capitalizationOptions.find(function(t){return t.id===e.id&&t.checked})})},n.changeSelectedCapitalization=function(e){n.setState(function(t){return{entries:t.entries.map(function(n){if(t.capitalizationOptions.some(function(e){return e.id===n.id&&e.checked})){var a=Object.assign({},n);return"initialCase"===e?(a.capitalization=a.initialCapitalization,a.TITLE=a.correctionInitialCase):"titleCase"===e?(a.capitalization="titleCase",a.TITLE=a.correctionTitleCase):"sentenceCase"===e&&(a.capitalization="sentenceCase",a.TITLE=a.correctionSentenceCase),a}return Object.assign({},n)})}},function(){v({entries:n.state.entries})}),n.changeAllOptions(!1)},n.changeAllOptions=function(e){return n.setState(function(t){return{capitalizationOptions:t.capitalizationOptions.map(function(t){return t.checked=e,t})}})},n.changeAllAuthorNameOptions=function(e){return n.setState(function(t){return{authorNameOptions:t.authorNameOptions.map(function(t){return t.checked=e,t})}})},n.changeAuthorNameOption=function(e){n.setState(function(t){return{authorNameOptions:t.authorNameOptions.map(function(t){if(t.author===e.author&&t.entryId===e.entryId){var n=Object.assign({},t);return n.checked=!t.checked,n}return t})}})},n.changeOptionsCheckboxes=function(e){return n.setState(function(t){return{capitalizationOptions:t.capitalizationOptions.filter(function(t){return t.id!==e.id}).concat([e])}})},n.loadDataFromServer=function(e){return n.setState({entries:e.entries,capitalizationOptions:e.entries.map(function(e){return{id:e.id,checked:!1}}),authorNameOptions:n.setInitialAuthorNameOptions(e.entries)})},n.onSetBibtexText=function(e){C({bibtexText:e}).then(function(){return S().then(function(e){return n.loadDataFromServer(e)})})},n.changeAuthorName=function(){n.setState(function(e){return{entries:e.entries.map(function(e){if(null!=e.AUTHOR&&n.state.authorNameOptions.some(function(t){return t.entryId===e.id&&t.checked})){var t=Object.assign({},e),a=t.AUTHOR.map(function(t){if(null!=n.state.authorNameOptions.find(function(n){return n.author===t.name&&n.checked&&n.entryId===e.id})&&null!=t.suggestion&&t.suggestion.length>0&&(t.abbreviated||t.misspelling)){var a=Object.assign({},t);return a.name=a.suggestion[0],t.abbreviated&&(a.abbreviated=!1,a.changedAbbreviation=!0),t.misspelling&&(a.misspelling=!1,a.changedMisspelling=!0),a}return t});return t.AUTHOR=a,t}return e})}},function(){n.setState(function(e){return{authorNameOptions:n.setInitialAuthorNameOptions(e.entries)}},function(){v({entries:n.state.entries})})})},n.changeAuthorSuggestion=function(e){e.forEach(function(e){n.searchAuthorSuggestion(e.title,e.author).then(function(t){null!=t&&n.setState(function(n){return{entries:n.entries.map(function(n){if(n.id===e.entryId){var a=n.AUTHOR.map(function(n){if(n.name!==e.author||n.suggestion.includes(t))return n;var a=Object.assign({},n);return a.suggestion.unshift(t),a});return n.AUTHOR=a,n}return n})}},function(){v({entries:n.state.entries})})})}),n.setState(function(e){return{authorNameOptions:n.setInitialAuthorNameOptions(e.entries)}})},n.searchSuggestionFile=function(){var e=Object(o.a)(n.state.entries);n.state.authorNameOptions.filter(function(e){return e.checked&&e.suggestion.length>1}).forEach(function(t){var n=L({},e.find(function(e){return e.id===t.entryId})),a=Object(o.a)(n.AUTHOR),r=L({},a.find(function(e){return e.name===t.author})),i=r.suggestion[r.suggestion.length-1];r.suggestion=[],r.suggestion.unshift(i),a[r.id]=r,n.AUTHOR=a,e[n.id]=n}),n.setState({entries:e},function(){v({entries:n.state.entries}),n.setState(function(e){return{authorNameOptions:n.setInitialAuthorNameOptions(e.entries)}})})},n.searchAuthorSuggestion=function(e,t){return k(e.replace(/[\s]+/g,"+"),t.replace(/[\s]+/g,"+")).then(function(e){if(null!=e&&null!=e.message&&e.message.items.length>0&&null!=e.message.items[0].author){var n=e.message.items[0].author.find(function(e){return t.startsWith(e.family)});return null!=n?"".concat(n.family,", ").concat(n.given):null}return null})},n.searchFieldSuggestion=function(e){return A(e.replace(/[\s]+/g,"+")).then(function(e){return null!=e&&null!=e.message&&e.message.items.length>0&&null!=e.message.items[0]?e.message.items[0]:null})},n.changeAllMandatoryFieldCheck=function(e){var t=Object(o.a)(n.state.entries);t.forEach(function(n,a){t[a]=L({},n,{mandatoryFieldsCheck:e})}),n.setState({entries:t},function(){return v({entries:n.state.entries})})},n.toggleMandatorFieldCheck=function(e){return n.changeMandatoryFieldCheck(e,!n.state.entries[e].mandatoryFieldsCheck)},n.changeMandatoryFieldCheck=function(e,t){var a=Object(o.a)(n.state.entries),r=L({},a[e],{mandatoryFieldsCheck:t});a[e]=r,n.setState({entries:a})},n.searchMandatoryFieldSuggestion=function(){var e=Object(o.a)(n.state.entries);e.filter(function(e){return e.mandatoryFieldsCheck&&e.missingRequiredFields.length>0}).forEach(function(t){var a=L({},e[t.id]);a.checkedSearched=!0,n.searchFieldSuggestion(a.TITLE).then(function(r){r.title.length>0&&r.title[0].toLowerCase().startsWith(t.TITLE.toLowerCase()[0])?Object(o.a)(t.missingRequiredFields).forEach(function(i){var s=i.toUpperCase();if(("BOOKTITLE"===s||"JOURNAL"===s)&&null!=r["container-title"]&&r["container-title"].length>0?(a.mandatoryFieldsSuggestions[s]=r["container-title"][0],e[t.id]=a,n.setState({entries:e},function(){return v({entries:n.state.entries})})):(e[t.id]=a,n.setState({entries:e},function(){return v({entries:n.state.entries})})),"YEAR"===s&&null!=r.created?(a.mandatoryFieldsSuggestions.YEAR=r.created["date-parts"][0][0],e[t.id]=a,n.setState({entries:e},function(){return v({entries:n.state.entries})})):(e[t.id]=a,n.setState({entries:e},function(){return v({entries:n.state.entries})})),"AUTHOR"===s&&null!=r.author&&r.author.length>0){var c=r.author.map(function(e){return{name:"".concat(e.family,", ").concat(e.given),abbreviated:!1,changedAbbreviation:!1,misspelling:!1,changedMisspelling:!1,suggestion:[]}});a.mandatoryFieldsSuggestions.AUTHOR=c,e[t.id]=a,n.setState({entries:e},function(){return v({entries:n.state.entries})})}else e[t.id]=a,n.setState({entries:e},function(){return v({entries:n.state.entries})})}):(e[t.id]=a,n.setState({entries:e},function(){return v({entries:n.state.entries})}))})})},n.addMissingFields=function(){var e=Object(o.a)(n.state.entries);e.filter(function(e){return e.mandatoryFieldsCheck&&e.missingRequiredFields.length>0&&Object.keys(e.mandatoryFieldsSuggestions).length>0}).forEach(function(t){var n=L({},t,{},t.mandatoryFieldsSuggestions),a=Object.keys(n.mandatoryFieldsSuggestions),r=Object(o.a)(n.missingRequiredFields);a.forEach(function(e){r=r.filter(function(t){return t!==e.toLowerCase()})}),n.missingRequiredFields=r,e[t.id]=n}),n.setState({entries:e},function(){return n.changeAllMandatoryFieldCheck(!1)})},n.removeNotMandatoryFields=function(){var e=Object(o.a)(n.state.entries);e.filter(function(e){return e.mandatoryFieldsCheck}).forEach(function(t){var n=L({},t),a=Object.keys(n).filter(function(e){return e===e.toUpperCase()});w(n.entryType,a).forEach(function(e){delete n[e]}),e[t.id]=n}),n.setState({entries:e},function(){return n.changeAllMandatoryFieldCheck(!1)})},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState(function(t){return{capitalizationOptions:t.entries.map(function(e){return{id:e.id,checked:!1}}),authorNameOptions:e.setInitialAuthorNameOptions(t.entries)}},this.getEntriesFromServer())}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("a",{className:"App-link",href:"app"},"cleanBibTeX")),r.a.createElement(f,{setBibtex:this.onSetBibtexText}),r.a.createElement(M,{entries:this.state.entries,capitalizationOptions:this.state.capitalizationOptions,changeOption:this.changeOptionsCheckboxes,changeAllOptions:this.changeAllOptions,changeSelectedCapitalization:this.changeSelectedCapitalization,getEntriesFromServer:this.getEntriesFromServer,changeAuthorName:this.changeAuthorName,changeAuthorSuggestion:this.changeAuthorSuggestion,authorNameOptions:this.state.authorNameOptions,changeAuthorNameOption:this.changeAuthorNameOption,changeAllAuthorNameOptions:this.changeAllAuthorNameOptions,changeMandatoryFieldCheck:this.changeMandatoryFieldCheck,toggleMandatorFieldCheck:this.toggleMandatorFieldCheck,searchMandatoryFieldSuggestion:this.searchMandatoryFieldSuggestion,changeAllMandatoryFieldCheck:this.changeAllMandatoryFieldCheck,addMissingFields:this.addMissingFields,removeNotMandatoryFields:this.removeNotMandatoryFields,searchSuggestionFile:this.searchSuggestionFile}))}}]),t}(a.Component);s.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.bba67401.chunk.js.map