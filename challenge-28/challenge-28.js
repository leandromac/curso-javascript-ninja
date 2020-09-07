(function(DOM){
  'use strict';

  function app() {
    var $formCEP = new DOM('[data-js="form-cep"]');
    var $inputCEP = new DOM('[data-js="input-cep"]');
    var $address = new DOM('[data-js="address"]');
    var $district = new DOM('[data-js="district"]');
    var $city = new DOM('[data-js="city"]');
    var $state = new DOM('[data-js="state"]');
    var $code = new DOM('[data-js="code"]');
    var $status = new DOM('[data-js="status"]');
    var ajax = new XMLHttpRequest();
    $formCEP.on('submit', handleSubmitFormCEP);

    function handleSubmitFormCEP(event) {
      event.preventDefault();
      var url = getUrl();
      ajax.open('GET', url);
      ajax.send();
      getMessage('loading');
      ajax.addEventListener('readystatechange', handleReadyStateChange);
    }

    function getUrl() {
      return replaceCEP('https://ws.apicep.com/cep/[CEP].json')
    }

    function clearCEP() {
    return $inputCEP.get()[0].value.replace(/\D/g, '');
    }

    function handleReadyStateChange() {
      if (isRequestOk()) {
        getMessage('ok');
        fillCEPField();
      }
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function fillCEPField() {
      var data = parseData();
      if (!data) {
        getMessage('error');
        data = clearData();
      }

      $address.get()[0].textContent = data.address;
      $district.get()[0].textContent = data.district;
      $city.get()[0].textContent = data.city;
      $state.get()[0].textContent = data.state;
      $code.get()[0].textContent = data.code;
    }

    function clearData() {
      return {
        address: '-',
        district: '-',
        city: '-',
        state: '-',
        code: '-'
      }
    }

    function parseData() {
      var result;
      try {
        result = JSON.parse(ajax.responseText);
      }
      catch(e) {
        result = null;
      }
      return result;
    }

    function getMessage(type) {
      var messages = {
        loading: replaceCEP('Buscando...'),
        ok: replaceCEP('Resultado da pesquisa do CEP [CEP]. '),
        error: replaceCEP('Não encontramos o endereço do [CEP]')
      };
      $status.get()[0].textContent = messages[type];
    }

    function replaceCEP(message) {
      return message.replace('[CEP]', clearCEP());
    }

    return {
      getMessage: getMessage,
      replaceCEP: replaceCEP
    };
  }

  window.app = app();
  app();
})(window.DOM);
