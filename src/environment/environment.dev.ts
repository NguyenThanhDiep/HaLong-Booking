interface ApiHotel {
    "BaseUrl": string;
    "BaseUrlSuffix": string;

    "GetAllHotel": string;
}

class Environment {
    "ApiHotel": ApiHotel;
    "Version": string;
}

function loadSetting(): Environment {
    let result = {} as Environment;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "/settings.json", false);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            result = JSON.parse(this.responseText);
        }
    };
    xhr.send();
    return result;
}

function GetBaseUrl(baseUrl: string) {
    //return configuration url if provided
    if (baseUrl) return baseUrl;
    //else return current url web site
    return window.location.origin;
}

const environment: Environment = loadSetting();
environment.Version = "1.0";
environment.ApiHotel.BaseUrl = (new URL(environment.ApiHotel.BaseUrlSuffix, GetBaseUrl(environment.ApiHotel.BaseUrl))).toString();

export { environment };