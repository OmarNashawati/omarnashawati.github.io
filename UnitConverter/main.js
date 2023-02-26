let catagories =  initializeCatagoriesData()

var x = window.matchMedia("(max-width: 799px)")
x.addListener(renderBar)
renderBar(x)

// E V E N T S   L I S T E N E R S
const main_container = document.getElementById('main_container')
main_container.addEventListener('click',function(e){
    const target = e.target

    if(target.classList.contains('sidebar_btn')){
        saveSelectedCatagoryToLocalStorage(target.innerHTML)
        setSelectedSidebarButtonAsActive()
        renderUnitsDropdownMenu()
    }

    // if(target.id == 'convert_btn'){
    //     convert()
    // }
    
    if(target.id == 'swap_btn'){
        swap()
    }
})

main_container.addEventListener('input',function(e){
    const target = e.target
    if(target.id === 'input_element'){
        if(target.value !== ''){
            convert()
        }
    }
})

main_container.addEventListener('change',function(e){
    const target = e.target
    
    if(target.id === 'topbar_btns_container'){
        const selectedOptionIndex = target.selectedIndex
        const selectedOption = target.options[selectedOptionIndex]
        
        saveSelectedCatagoryToLocalStorage(selectedOption.value)
        setSelectedTopbarOptionAsActive()
        renderUnitsDropdownMenu()
    }

    if(target.id === 'input_dropdown_catagory' || target.id === 'output_dropdown_catagory'){
      if(document.getElementById('input_element').value !== ''){
        convert()
      }
    }
})

// Media Queries selector with JavaScript //
function renderBar(x){
    if(x.matches){
        renderTopBar()
        setSelectedTopbarOptionAsActive()
    }else{
        renderSideBar()
        setSelectedSidebarButtonAsActive()
    }

    renderUnitsDropdownMenu()
}

//T O P B A R
function renderTopBar(){
    const topbar_btns_container = document.getElementById('topbar_btns_container')
    const topbarHtml = catagories.map((item)=>{
        return `
            <option value="${item.name}" class="topbar_btn">${item.name}</option>
        `
    }).join(' ')

    topbar_btns_container.innerHTML = topbarHtml
}

function setSelectedTopbarOptionAsActive(){
    const selectedCatagory = getActiveCatagoryNameFromLocalStorage()

    const topbar_btns_container = document.getElementById('topbar_btns_container')
    const options  = topbar_btns_container.options
    for(i=0 ; i<options.length ; i++ ){
        if(options[i].innerText === selectedCatagory ){
            topbar_btns_container.selectedIndex = i
        }
    }
}

// S I D E B A R
function renderSideBar(){
    const sidebar_btns_container = document.getElementById('sidebar_btns_container')
    const sidebarHtml = catagories.map((item)=>{
        return `
            <div value="${item.name}" class="sidebar_btn">${item.name}</div>
        `
    }).join(' ')

    sidebar_btns_container.innerHTML = sidebarHtml
}

function setSelectedSidebarButtonAsActive(){
    const selectedCatagory = getActiveCatagoryNameFromLocalStorage()

    const side_bar_btns_list = document.getElementsByClassName('sidebar_btn')
    for(i=0 ; i<side_bar_btns_list.length ; i++ ){
        if(side_bar_btns_list[i].innerHTML === selectedCatagory ){
            side_bar_btns_list[i].classList.add('active')
        }else{
            side_bar_btns_list[i].classList.remove('active')
        }
    }
}


function renderUnitsDropdownMenu(){
    const input_dropdown_catagory = document.getElementById('input_dropdown_catagory')
    const output_dropdown_catagory = document.getElementById('output_dropdown_catagory')

    const selectedCatagory = getActiveCatagoryNameFromLocalStorage()
    const units = catagories.find((catagory) => catagory.name === selectedCatagory).units
    const dropdown_menu_html  = units.map((unit) => {
      return `<option value="${unit[0]}">${unit[0]}</option> `
    }).join(' ')

    // input_dropdown_catagory.selectedIndex = 0
    // output_dropdown_catagory.selectedIndex = 1

    input_dropdown_catagory.innerHTML = dropdown_menu_html
    output_dropdown_catagory.innerHTML = dropdown_menu_html
}

function saveSelectedCatagoryToLocalStorage(catagory){
  localStorage.setItem('activeCatagory',catagory)
  document.getElementById('input_element').value = ''
  document.getElementById('output_element').value =''
}
function getActiveCatagoryNameFromLocalStorage(){
  return  localStorage.getItem('activeCatagory')  || catagories[0].name
}

//C O N V E R T E R
function convert(){
    //getDataFormUI
    const input_value = document.getElementById('input_element').value
    const input_unit = document.getElementById('input_dropdown_catagory').value
    const output_unit = document.getElementById('output_dropdown_catagory').value
    
    //validation
    if(input_value === ''){
      showAlarm()
      return
    }
    
    //convertData
    let result = 0
    const selectedCatagory = catagories.find((item) => item.name === getActiveCatagoryNameFromLocalStorage())

    if(selectedCatagory.name === 'Temperature'){
      const units =  selectedCatagory.units
  
      let value = eval( input_value )
  
      if(input_unit === 'Kelvin'){
          value =  eval(units.find((unit) => unit[0] === output_unit)[2])
      }else{
          value = eval(units.find((unit) => unit[0] === input_unit)[3])
          value =  eval(units.find((unit) => unit[0] === output_unit)[2])
      }
      result = value

    }else if(selectedCatagory.name === 'Angle'){
      const units = selectedCatagory.units

      let value = eval( input_value )

      if(input_unit === 'circle'){
        value =  eval(units.find((unit) => unit[0] === output_unit)[2])
      }else{
        value = eval(units.find((unit) => unit[0] === input_unit)[3])
        value =  eval(units.find((unit) => unit[0] === output_unit)[2])
      }
      result = value

    }else{ 

      const in_unit_factor = selectedCatagory.units.find((unit) => unit[0] === input_unit)[2] 
      const out_unit_factor = selectedCatagory.units.find((unit) => unit[0] === output_unit)[2] 
      const ratio = in_unit_factor / out_unit_factor

      result = input_value * ratio
    }
    document.getElementById('output_element').value = result
}

function showAlarm(){
    const input_alert_element = document.getElementById('input_alert_element')
    input_alert_element.classList.add('visible')
    input_alert_element.innerText = 'Please inter input value'
    setTimeout(() => {
      input_alert_element.classList.remove('visible')
    },3000)
}

function swap(){
    //get UI element
    const input_element = document.getElementById('input_element')
    const output_element = document.getElementById('output_element')
    const input_unit_element = document.getElementById('input_dropdown_catagory')
    const output_unit_element = document.getElementById('output_dropdown_catagory')

    //getDataFormUI
    const input = input_element.value
    const output = output_element.value
    const input_unit = input_unit_element.value
    const output_unit = output_unit_element.value
    //swapData
    input_element.value = output
    input_element.innerText = output

    output_element.value = input
    output_element.value = input
    
    input_unit_element.value = output_unit
    output_unit_element.value = input_unit

    convert()
}


function initializeCatagoriesData(){
  let catagories = 
  [
    { name:             'Temperature',
      description:      'Convert temperature measurements like Celsius, Fahrenheit, Kelvin.',
      id:               'temperature',
      defaultUnitIndex: 0,
      units: [
        ["Celsius",    "°C",  'value + 273.15',         'value - 273.15'],
        ["Fahrenheit", "°F",  '5/9 * (value + 459.67)', '9/5 * value - 459.67'],
        ["Kelvin",     "K",   1],
      ]
    },
    { name:             'Time',
      description:      'Convert time measurements like seconds, minutes, hours, days, weeks, years.',
      id:               'time',
      defaultUnitIndex: 15,
      units: [
        ["seconds",                      "s",   1],
        ["milliseconds",                 "ms",  1e-3],
        ["nanoseconds",                  "ns",  1e-9],
        ["microseconds",                 "μs",  1e-6],
        ["picoseconds",                  "ps",  1e-12],
        ["minutes",                      "min", 60],
        ["hours",                        "h",   3600],
        ["days",                         "d",   86400],
        ["weeks",                        "",    604800],
        ["months",                       "",    2628000],
        ["years (Common)",               "y",   31536000],
        ["centuries",                    "",    3153600000],
        ["decades",                      "",    315360000],
      ]
    },
    { name:             'Length',
      description:      'Convert length measurements like meter, inches, feet or light years.',
      id:               'length',
      defaultUnitIndex: 18,
      units: [
        ["kilometers",                      "km",       1000],
        ["meters",                          "m",        1],
        ["centimeters",                     "cm",       0.01],
        ["millimeters",                     "mm",       0.001],
        ["nanometers",                      "nm",       1e-9],
        ["picometers",                      "pm",       1e-12],
        ["micrometers",                     "µm",       1e-6],
        ["feet (UK & US)",                  "",         0.3048],
        ["inches",                          "in",       0.0254],
        ["mil",                             "",         0.0000254],
        ["miles (UK & US)",                 "",         1609.344],
        ["miles (nautical, international)", "",         1852],
        ["yards",                           "yd",       0.9144],
        ["light years",                     "",         9.460528405e15],
      ]
    },
    { name:             'Area',
      description:      'Convert area measurements like square meters, square feet, acres.',
      id:               'area',
      defaultUnitIndex: 11,
      units: [
        ["acres",                      "",    4046.8564224],
        ["hectares",                   "",    1e4],
        ["square centimeters",         "cm²", 1e-4],
        ["square feet (US & UK)",      "",    0.09290304],
        ["square feet (US survey)",    "",    0.092903411613],
        ["square inches",              "",    0.00064516],
        ["square kilometers",          "km²", 1e6],
        ["square meters",              "m²",  1],
        ["square miles",               "",    2589988.110336],
        ["square millimeters",         "mm²", 1e-6],
        ["square yards",               "",    0.83612736],
      ]
    },
    { name:             'Volume',
      description:      'Convert volume measurements like cubic meters, liters, gallons, pints.',
      id:               'volume',
      defaultUnitIndex: 27,
      units: [
        ["acre foot",               "",       1233481.83754752],
        ["barrels (oil)",           "bbl",    158.987294928],
        ["bushels (UK)",            "",       36.36872],
        ["bushels (US)",            "",       35.23907016688],
        ["centiliters",             "",       0.01],
        ["cubic centimeters",       "cm³",    1e-3],
        ["cubic decimeters",        "dm³",    1],
        ["cubic decameters",        "",       1e6],
        ["cubic feet",              "ft³",    28.316846592],
        ["cubic inches",            "",       0.016387064],
        ["cubic kilometers",        "",       1e12],
        ["cubic meters",            "m³",     1e3],
        ["cubic mile",              "",       4.168181825e12],
        ["cubic millimeters",       "",       1e-6],
        ["cubic yards",             "",       764.554857984],
        ["cups",                    "",       0.2365882365],
        ["deciliters",              "",       0.1],
        ["dram (imperial)",         "",       0.0035516328125000],
        ["dram (US)",               "",       0.0036966911953125],
        ["fluid ounces (imperial)", "fl oz",  0.0284130625],
        ["fluid ounces (US)",       "fl oz",  0.0295735295625],
        ["gallons (imperial)",      "gal",    4.54609],
        ["gallons, dry (US)",       "",       4.40488377086],
        ["gallons, liquid (US)",    "gal",    3.785411784],
        ["gill (imperial)",         "gi",     0.1420653125],
        ["gill (US)",               "gi",     0.11829411825],
        ["kiloliters",              "kl",     1e3],
        ["liters",                  "l or L", 1],
        ["liters (1901-1964)",      "",       1.000028],
        ["milliliters",             "ml",     1e-3],
        ["microliters",             "µl",     1e-6],
        ["nanoliters",              "nl",     1e-9],
        ["picoliters",              "pl",     1e-12],
        ["pints (imperial)",        "pt",     0.56826125],
        ["pints, dry (US)",         "",       0.5506104713575],
        ["pints, liquid (US)",      "pt",     0.473176473],
        ["quarts (imperial)",       "qt",     1.1365225],
        ["quarts, dry (US)",        "",       1.101220942715],
        ["quarts, liquid (US)",     "qt",     0.946352946],
        ["table spoons",            "",       0.01478676478125],
        ["tea spoons",              "",       0.00492892159375]
      ]
    },
    { name:             'Angle',
      description:      'Convert angle measurements like degrees, radians, circles.',
      id:               'angle',
      defaultUnitIndex: 3,
      units: [
        ["degree",             "°",  'value*360', 'value/360'],
        ["radian",             "", 'value * 2 * Math.PI', 'value / (2 * Math.PI)'],
        ["grad",               "",  'value*400',  'value/400'],
        ["circle",             "",  1],
        ["arcminute",          "",   'value * (360*60)',  'value/(360*60)'],
        ["arcsecond",          "", 'value * (360*3600)',  'value/(360*3600)'],
        ["gon",                "",  'value*400',  'value/400'],
        ["mil (Nato)",         "", 'value*6400',  'value/6400'],
        ["mil (Soviet Union)", "", 'value*6000',  'value/6000'],
        ["mil (Sweden)",       "", 'value*6300',  'value/6300'],
      ]
    },
    { name:             'Bits and Bytes',
      description:      'Convert bits, bytes, kilobytes, gigabytes.',
      id:               'bits',
      defaultUnitIndex: 5,
      units: [
        ["bits",           "",   0.125],
        ["bytes",          "",   1],
        ["kilobits",       "Kb", 128],
        ["kilobytes",      "KB", 1024],
        ["megabits",       "Mb", 131072],
        ["megabytes",      "MB", 1048576],
        ["gigabits",       "Gb", 134217728],
        ["gigabytes",      "GB", 1073741824],
        ["terabits",       "Tb", 137438953472],
        ["terabytes",      "TB", 1099511627776],
        ["petabits",       "Pb", 140737488355328],
        ["petabytes",      "PB", 1125899906842624],
        ["exabits",        "Eb", 144115188075855872],
        ["exabytes",       "EB", 1152921504606846976]
      ]
    },
    { name:             'Mass',
      description:      'Convert mass measurements like kilograms, pounds, stones.',
      id:               'mass',
      defaultUnitIndex: 9,
      units: [
        ["carats (metric)",                "CD",   0.0002],
        ["cental",                         "",     45.359237],
        ["decagrams",                      "dag",  0.01],
        ["Earth masses",                   "M⊕",   5.980e24],
        ["femtograms",                     "fg",   1e-18],
        ["grains",                         "gr",   0.00006479891],
        ["grams",                          "g",    1e-3],
        ["hectograms",                     "hg",   0.1],
        ["hundredweights",                 "cwt",  50.80234544],
        ["kilograms",                      "kg",   1],
        ["kilotonnes",                     "kt",   1e6],
        ["megatonnes",                     "Mt",   1e9],
        ["micrograms",                     "µg",   1e-9],
        ["milligrams",                     "mg",   1e-6],
        ["nanograms",                      "ng",   1e-12],
        ["ounces (US & UK)",               "oz",   0.028349523125],
        ["ounces (troy, precious metals)", "oz t", 0.0311034768],
        ["picograms",                      "pg",   1e-15],
        ["pounds (US & UK)",               "lbs",  0.45359237],
        ["pounds (troy, precious metals)", "lb t", 0.3732417216],
        ["Solar masses",                   "M☉",  1.989e30],
        ["slugs (g-pounds)",               "",     14.593903],
        ["stones",                         "st",   6.35029318],
        ["tons (UK or long)",              "LT",   1016.0469088],
        ["tons (US or short)",             "ST",   907.18474],
        ["tonnes (metric)",                "t",    1000]
      ]
    }
  ];

  return catagories
}