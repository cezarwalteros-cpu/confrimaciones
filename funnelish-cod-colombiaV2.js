
(function () {

  // =========================
  // DATA
  // =========================
  var ciudadesColombia = {
    "Leticia": "Amazonas", "Puerto Nariño": "Amazonas",
    "Medellín": "Antioquia", "Bello": "Antioquia", "Itagüí": "Antioquia", "Envigado": "Antioquia",
    "Apartadó": "Antioquia", "Turbo": "Antioquia", "Rionegro": "Antioquia", "Caucasia": "Antioquia",
    "Copacabana": "Antioquia", "La Estrella": "Antioquia", "Sabaneta": "Antioquia", "Caldas": "Antioquia",
    "Girardota": "Antioquia", "Barbosa": "Antioquia", "Marinilla": "Antioquia", "La Ceja": "Antioquia",
    "El Retiro": "Antioquia", "Guatapé": "Antioquia", "Santa Fe de Antioquia": "Antioquia",
    "Barranquilla": "Atlántico", "Soledad": "Atlántico", "Malambo": "Atlántico", "Sabanalarga": "Atlántico",
    "Galapa": "Atlántico", "Puerto Colombia": "Atlántico", "Baranoa": "Atlántico",
    "Bogotá": "Bogotá D.C.", "Bogotá D.C.": "Bogotá D.C.",
    "Cartagena": "Bolívar", "Magangué": "Bolívar", "Turbaco": "Bolívar", "Arjona": "Bolívar", "Carmen de Bolívar": "Bolívar",
    "Tunja": "Boyacá", "Duitama": "Boyacá", "Sogamoso": "Boyacá", "Chiquinquirá": "Boyacá", "Paipa": "Boyacá", "Puerto Boyacá": "Boyacá", "Villa de Leyva": "Boyacá",
    "Manizales": "Caldas", "La Dorada": "Caldas", "Chinchiná": "Caldas", "Villamaría": "Caldas",
    "Florencia": "Caquetá", "San Vicente del Caguán": "Caquetá",
    "Yopal": "Casanare", "Aguazul": "Casanare", "Villanueva": "Casanare",
    "Popayán": "Cauca", "Santander de Quilichao": "Cauca", "Puerto Tejada": "Cauca",
    "Valledupar": "Cesar", "Aguachica": "Cesar", "Codazzi": "Cesar", "Bosconia": "Cesar",
    "Quibdó": "Chocó", "Istmina": "Chocó",
    "Montería": "Córdoba", "Cereté": "Córdoba", "Lorica": "Córdoba", "Sahagún": "Córdoba", "Montelíbano": "Córdoba", "Planeta Rica": "Córdoba", "Tierralta": "Córdoba",
    "Soacha": "Cundinamarca", "Facatativá": "Cundinamarca", "Zipaquirá": "Cundinamarca", "Chía": "Cundinamarca",
    "Fusagasugá": "Cundinamarca", "Mosquera": "Cundinamarca", "Madrid": "Cundinamarca", "Funza": "Cundinamarca",
    "Cajicá": "Cundinamarca", "Girardot": "Cundinamarca", "Cota": "Cundinamarca", "La Calera": "Cundinamarca",
    "Sopó": "Cundinamarca", "Tocancipá": "Cundinamarca", "Tabio": "Cundinamarca", "Tenjo": "Cundinamarca",
    "Villeta": "Cundinamarca", "La Mesa": "Cundinamarca", "Ubaté": "Cundinamarca",
    "Neiva": "Huila", "Pitalito": "Huila", "Garzón": "Huila", "La Plata": "Huila", "Campoalegre": "Huila",
    "Riohacha": "La Guajira", "Maicao": "La Guajira", "Uribia": "La Guajira", "Fonseca": "La Guajira",
    "Santa Marta": "Magdalena", "Ciénaga": "Magdalena", "Fundación": "Magdalena", "El Banco": "Magdalena", "Plato": "Magdalena",
    "Villavicencio": "Meta", "Acacías": "Meta", "Granada": "Meta", "Puerto López": "Meta",
    "Pasto": "Nariño", "Tumaco": "Nariño", "Ipiales": "Nariño", "Túquerres": "Nariño",
    "Cúcuta": "Norte de Santander", "Ocaña": "Norte de Santander", "Pamplona": "Norte de Santander", "Villa del Rosario": "Norte de Santander", "Los Patios": "Norte de Santander",
    "Mocoa": "Putumayo", "Puerto Asís": "Putumayo",
    "Armenia": "Quindío", "Calarcá": "Quindío", "La Tebaida": "Quindío", "Montenegro": "Quindío", "Quimbaya": "Quindío", "Circasia": "Quindío",
    "Pereira": "Risaralda", "Dosquebradas": "Risaralda", "Santa Rosa de Cabal": "Risaralda", "La Virginia": "Risaralda",
    "San Andrés": "San Andrés y Providencia", "Providencia": "San Andrés y Providencia",
    "Bucaramanga": "Santander", "Floridablanca": "Santander", "Girón": "Santander", "Piedecuesta": "Santander", "Barrancabermeja": "Santander", "San Gil": "Santander",
    "Sincelejo": "Sucre", "Corozal": "Sucre", "San Marcos": "Sucre", "Tolú": "Sucre",
    "Ibagué": "Tolima", "Espinal": "Tolima", "Melgar": "Tolima", "Honda": "Tolima", "Mariquita": "Tolima", "Chaparral": "Tolima", "Líbano": "Tolima",
    "Cali": "Valle del Cauca", "Buenaventura": "Valle del Cauca", "Palmira": "Valle del Cauca", "Tuluá": "Valle del Cauca",
    "Cartago": "Valle del Cauca", "Buga": "Valle del Cauca", "Jamundí": "Valle del Cauca", "Yumbo": "Valle del Cauca",
    "Candelaria": "Valle del Cauca", "Florida": "Valle del Cauca", "Pradera": "Valle del Cauca", "Zarzal": "Valle del Cauca", "Sevilla": "Valle del Cauca",
    "Inírida": "Guainía", "San José del Guaviare": "Guaviare", "Mitú": "Vaupés", "Puerto Carreño": "Vichada"
  };

  var departamentosColombia = [
    "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bogotá D.C.", "Bolívar", "Boyacá", "Caldas",
    "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía",
    "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander",
    "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander", "Sucre",
    "Tolima", "Valle del Cauca", "Vaupés", "Vichada"
  ];

  var listaCiudades = Object.keys(ciudadesColombia).sort();

  // =========================
  // UTILS
  // =========================
  function generarEmail() {
    return 'cliente' + Math.random().toString().slice(2, 10) + Date.now().toString().slice(-4) + '@codcolombia.co';
  }

  function ocultarCampo(nombre) {
    var el = document.querySelector('[name="' + nombre + '"]');
    if (el) {
      var formEl = el.closest('.form-element');
      if (formEl) formEl.style.display = 'none';
    }
  }

  function inyectarDepartamentos() {
    var select = document.querySelector('select[name="shipping_state"]');
    if (!select) return;
    if (select.dataset.deptosInjected === '1') return;
    select.dataset.deptosInjected = '1';
    select.innerHTML = '<option value="">Departamento</option>';
    departamentosColombia.forEach(function (d) {
      var opt = document.createElement('option');
      opt.value = d;
      opt.text = d;
      select.appendChild(opt);
    });
  }

  function seleccionarDepartamento(ciudad) {
    var depto = ciudadesColombia[ciudad];
    if (!depto) return;
    var select = document.querySelector('select[name="shipping_state"]');
    if (!select) return;
    for (var i = 0; i < select.options.length; i++) {
      if (select.options[i].value === depto) {
        select.selectedIndex = i;
        select.dispatchEvent(new Event('change', { bubbles: true }));
        break;
      }
    }
  }

  function crearAutocompletado(input) {
    if (!input || input.dataset.cityAutocomplete === '1') return;
    input.dataset.cityAutocomplete = '1';

    var box = document.createElement('div');
    box.id = 'sugerencias-ciudad';
    box.style.cssText = 'position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ccc;border-radius:0 0 8px 8px;max-height:200px;overflow-y:auto;z-index:99999;display:none;box-shadow:0 4px 12px rgba(0,0,0,0.15);';

    input.parentElement.style.position = 'relative';
    input.parentElement.appendChild(box);

    input.addEventListener('input', function () {
      var txt = (this.value || '').toLowerCase().trim();
      box.innerHTML = '';
      if (txt.length < 1) { box.style.display = 'none'; return; }
      var res = listaCiudades.filter(function (c) { return c.toLowerCase().indexOf(txt) > -1; }).slice(0, 8);
      if (res.length === 0) { box.style.display = 'none'; return; }
      res.forEach(function (ciudad) {
        var item = document.createElement('div');
        item.innerHTML = '<strong>' + ciudad + '</strong> <span style="color:#888;font-size:12px;">- ' + ciudadesColombia[ciudad] + '</span>';
        item.style.cssText = 'padding:10px 12px;cursor:pointer;border-bottom:1px solid #eee;';
        item.onmouseenter = function () { this.style.background = '#f0f7ff'; };
        item.onmouseleave = function () { this.style.background = '#fff'; };
        item.onclick = function () {
          input.value = ciudad;
          box.style.display = 'none';
          seleccionarDepartamento(ciudad);
        };
        box.appendChild(item);
      });
      box.style.display = 'block';
    });

    input.addEventListener('blur', function () {
      setTimeout(function () {
        box.style.display = 'none';
        if (input.value && input.value.trim()) seleccionarDepartamento(input.value.trim());
      }, 200);
    });

    document.addEventListener('click', function (e) {
      if (e.target !== input) box.style.display = 'none';
    });
  }

  // =========================
  // VALIDACIÓN TELÉFONO CO
  // =========================
  function formatearTelefono(valor) {
    var digits = (valor || '').replace(/\D/g, '');
    if (digits.startsWith('57') && digits.length > 10) digits = digits.slice(2);
    if (digits.length > 10) digits = digits.slice(0, 10);
    if (digits.length === 10 && digits.startsWith('3')) return '+57' + digits;
    return null;
  }

  // =========================
  // VARIABLES GLOBALES
  // =========================
  var avisoEl = null;
  var overlayEl = null;

  function crearAviso(phone) {
    if (avisoEl) return avisoEl;
    avisoEl = document.createElement('div');
    avisoEl.id = 'phone-warning-v3';
    avisoEl.style.cssText = 'color:#dc2626;font-size:13px;margin-top:6px;display:none;font-weight:600;';
    avisoEl.textContent = '⚠️ Celular inválido. Debe tener 10 dígitos y empezar por 3. Ej: 3001234567';
    phone.parentNode.appendChild(avisoEl);
    return avisoEl;
  }

  function mostrarError(phone) {
    if (!avisoEl) crearAviso(phone);
    avisoEl.style.display = 'block';
    phone.style.borderColor = '#dc2626';
    phone.style.boxShadow = '0 0 0 3px rgba(220,38,38,0.3)';
  }

  function limpiarError(phone) {
    if (avisoEl) avisoEl.style.display = 'none';
    phone.style.borderColor = '';
    phone.style.boxShadow = '';
  }

  // =========================
  // OVERLAY BLOQUEADOR
  // Cubre el botón para impedir clicks
  // =========================
  function crearOverlay() {
    if (overlayEl) return overlayEl;
    overlayEl = document.createElement('div');
    overlayEl.id = 'phone-blocker-overlay';
    overlayEl.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;display:none;cursor:not-allowed;';
    document.body.appendChild(overlayEl);
    
    overlayEl.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      var phone = document.querySelector('input[name="phone"]');
      if (phone) {
        mostrarError(phone);
        phone.focus();
      }
      return false;
    }, true);
    
    return overlayEl;
  }

  function activarBloqueo() {
    if (!overlayEl) crearOverlay();
    overlayEl.style.display = 'block';
    
    // Auto-desactivar después de 100ms para no bloquear permanentemente
    setTimeout(function() {
      if (overlayEl) overlayEl.style.display = 'none';
    }, 150);
  }

  // =========================
  // TELÉFONO PRINCIPAL
  // =========================
  function instalarTelefonoCO() {
    var phone = document.querySelector('input[name="phone"]');
    if (!phone) return;
    if (phone.dataset.telcoV3 === '1') return;
    phone.dataset.telcoV3 = '1';

    phone.setAttribute('inputmode', 'numeric');
    phone.setAttribute('autocomplete', 'tel');
    phone.placeholder = 'Ej: 3001234567';

    crearAviso(phone);
    crearOverlay();

    // Limpiar error al escribir
    phone.addEventListener('input', function() {
      limpiarError(phone);
    });

    // Formatear al salir
    phone.addEventListener('blur', function () {
      var fmt = formatearTelefono(phone.value);
      if (fmt) {
        phone.value = fmt;
        limpiarError(phone);
      } else if (phone.value.trim()) {
        mostrarError(phone);
      }
    });

    // Enter
    phone.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var fmt = formatearTelefono(phone.value);
        if (!fmt) {
          e.preventDefault();
          e.stopPropagation();
          mostrarError(phone);
        }
      }
    }, true);
  }

  // =========================
  // INTERCEPTOR GLOBAL
  // Detecta intento de click en submit y activa overlay si inválido
  // =========================
  function instalarInterceptorGlobal() {
    if (window.__phoneInterceptorV3) return;
    window.__phoneInterceptorV3 = true;

    function verificarYBloquear(e) {
      var target = e.target;
      if (!target) return;

      // Verificar si es el botón de submit
      var btn = target.closest ? target.closest('a[href="#submit-step"]') : null;
      if (!btn) {
        // También verificar por clase
        var el = target;
        while (el && el !== document.body) {
          if (el.tagName === 'A' && el.getAttribute('href') === '#submit-step') {
            btn = el;
            break;
          }
          el = el.parentElement;
        }
      }
      
      if (!btn) return;

      var phone = document.querySelector('input[name="phone"]');
      if (!phone) return;

      var fmt = formatearTelefono(phone.value);
      
      if (!fmt) {
        // BLOQUEAR - Activar overlay inmediatamente
        activarBloqueo();
        mostrarError(phone);
        
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        // Scroll al campo de teléfono
        phone.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(function() { phone.focus(); }, 100);
        
        console.log('[COD-CO] Teléfono inválido, bloqueado');
        return false;
      } else {
        phone.value = fmt;
        limpiarError(phone);
      }
    }

    // Capturar TODOS los eventos posibles antes que Alpine
    ['mousedown', 'pointerdown', 'touchstart'].forEach(function(evt) {
      document.addEventListener(evt, verificarYBloquear, { capture: true, passive: false });
    });

    // También en click por si acaso
    document.addEventListener('click', function(e) {
      var target = e.target;
      var btn = target.closest ? target.closest('a[href="#submit-step"]') : null;
      if (!btn) return;
      
      var phone = document.querySelector('input[name="phone"]');
      if (!phone) return;
      
      var fmt = formatearTelefono(phone.value);
      if (!fmt) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        mostrarError(phone);
        phone.focus();
        return false;
      }
    }, { capture: true, passive: false });

    console.log('[COD-CO] Interceptor global V3 instalado');
  }

  // =========================
  // MODIFICAR EL BOTÓN DIRECTAMENTE
  // Agregar nuestro propio onclick ANTES del de Alpine
  // =========================
  function modificarBoton() {
    var btns = document.querySelectorAll('a[href="#submit-step"]');
    btns.forEach(function(btn) {
      if (btn.dataset.phoneValidatorAttached === '1') return;
      btn.dataset.phoneValidatorAttached = '1';
      
      // Crear un wrapper div que capture el click primero
      var wrapper = document.createElement('div');
      wrapper.style.cssText = 'display:contents;';
      wrapper.dataset.phoneWrapper = '1';
      
      // Mover el botón dentro del wrapper
      btn.parentNode.insertBefore(wrapper, btn);
      wrapper.appendChild(btn);
      
      // Interceptar en el wrapper
      wrapper.addEventListener('click', function(e) {
        var phone = document.querySelector('input[name="phone"]');
        if (!phone) return;
        
        var fmt = formatearTelefono(phone.value);
        if (!fmt) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          mostrarError(phone);
          phone.focus();
          console.log('[COD-CO] Bloqueado en wrapper');
          return false;
        }
        phone.value = fmt;
        limpiarError(phone);
      }, { capture: true, passive: false });
      
      console.log('[COD-CO] Wrapper instalado en botón');
    });
  }

  // =========================
  // HACK: Deshabilitar temporalmente x-on:click
  // =========================
  function deshabilitarAlpineEnBoton() {
    var btns = document.querySelectorAll('a[href="#submit-step"]');
    btns.forEach(function(btn) {
      if (btn.dataset.alpineHacked === '1') return;
      
      var phone = document.querySelector('input[name="phone"]');
      if (!phone) return;
      
      // Guardar el atributo original
      var originalXOnClick = btn.getAttribute('x-on:click');
      if (!originalXOnClick) return;
      
      btn.dataset.alpineHacked = '1';
      btn.dataset.originalXOnClick = originalXOnClick;
      
      // Reemplazar con nuestra versión que valida primero
      var newHandler = "if(!window.__validarTelefonoCO || !window.__validarTelefonoCO()){$event.preventDefault();$event.stopPropagation();return false;}" + originalXOnClick;
      btn.setAttribute('x-on:click', newHandler);
      
      console.log('[COD-CO] x-on:click modificado');
    });
  }

  // Función global de validación
  window.__validarTelefonoCO = function() {
    var phone = document.querySelector('input[name="phone"]');
    if (!phone) return true;
    
    var fmt = formatearTelefono(phone.value);
    if (!fmt) {
      mostrarError(phone);
      phone.focus();
      console.log('[COD-CO] Validación global falló');
      return false;
    }
    phone.value = fmt;
    limpiarError(phone);
    return true;
  };

  // =========================
  // INIT
  // =========================
  function initCore() {
    var email = document.querySelector('input[name="email"]');
    if (email && !email.value) email.value = generarEmail();
    ocultarCampo('email');

    var pais = document.querySelector('select[name="shipping_country"]');
    if (pais && pais.dataset.countryLocked !== '1') {
      pais.dataset.countryLocked = '1';
      for (var i = 0; i < pais.options.length; i++) {
        if (pais.options[i].value === 'CO') {
          pais.selectedIndex = i;
          pais.dispatchEvent(new Event('change', { bubbles: true }));
          break;
        }
      }
    }
    ocultarCampo('shipping_country');

    inyectarDepartamentos();
    ocultarCampo('shipping_state');

    var ciudad = document.querySelector('input[name="shipping_city"]');
    if (ciudad) {
      ciudad.placeholder = 'Escribe tu ciudad...';
      ciudad.setAttribute('autocomplete', 'off');
      crearAutocompletado(ciudad);
    }

    instalarTelefonoCO();
    instalarInterceptorGlobal();
    modificarBoton();
    deshabilitarAlpineEnBoton();
  }

  // =========================
  // BOOTSTRAP
  // =========================
  function boot() { initCore(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(boot, 300); });
  } else {
    setTimeout(boot, 300);
  }

  var tries = 0;
  var poll = setInterval(function () {
    tries++;
    boot();
    if (document.querySelector('input[name="phone"]') || tries >= 80) {
      clearInterval(poll);
    }
  }, 250);

  var mo = new MutationObserver(function () { boot(); });
  mo.observe(document.documentElement, { childList: true, subtree: true });

})();


// ╔══════════════════════════════════════════════════════════════════════╗
// ║  MÓDULO WEBHOOKS v3 - 100% AISLADO DEL CÓDIGO ORIGINAL             ║
// ║  IIFE separado: si esto falla, el checkout sigue funcionando        ║
// ║  NO modifica window.fetch, NO modifica XMLHttpRequest               ║
// ║  NO agrega overlays, NO modifica el DOM del formulario              ║
// ╚══════════════════════════════════════════════════════════════════════╝
;(function() {
  'use strict';
  try {

  // ========== CONFIGURACIÓN ==========
  // ⚠️ REEMPLAZA con tus URLs reales de n8n
  var WEBHOOK_URLS = {
    ordenCompleta:     'https://programacioncwf.app.n8n.cloud/webhook/pedido-completo',
    carritoAbandonado: 'https://programacioncwf.app.n8n.cloud/webhook/carrito-abandonado'
  };
  var TIEMPO_ABANDONO_MIN = 3;
  var MAX_REINTENTOS = 2;
  var DEBUG = true;

  // ========== ESTADO ==========
  var _st = {
    ordenOk: false,
    abandonoOk: false,
    sid: 'ses_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2,8),
    t0: new Date().toISOString(),
    listo: false
  };

  function _log(m) { if (DEBUG) console.log('[WH] ' + m); }

  // ========== FORMATEAR TELÉFONO (copia local, no depende del IIFE original) ==========
  function _fmtTel(v) {
    var d = (v || '').replace(/\D/g, '');
    if (d.indexOf('57') === 0 && d.length > 10) d = d.slice(2);
    if (d.length > 10) d = d.slice(0, 10);
    if (d.length === 10 && d.charAt(0) === '3') return '+57' + d;
    return null;
  }

  // ========== LEER PARÁMETRO URL ==========
  function _param(p) {
    try { return new URL(window.location.href).searchParams.get(p) || ''; }
    catch(e) { return ''; }
  }

  // ========== LEER VALOR DE CAMPO ==========
  function _val(name) {
    try {
      var el = document.querySelector('input[name="' + name + '"]');
      return (el && el.value) ? el.value.trim() : '';
    } catch(e) { return ''; }
  }

  function _selVal(name) {
    try {
      var el = document.querySelector('select[name="' + name + '"]');
      return (el && el.value) ? el.value : '';
    } catch(e) { return ''; }
  }

  // ========== CAPTURAR TODOS LOS DATOS ==========
  function _datos() {
    var tel = _val('phone');
    var fmt = _fmtTel(tel);

    var d = {
      nombre: _val('first_name'),
      apellido: _val('last_name'),
      telefono: tel,
      telefonoFormateado: fmt || '',
      telefonoValido: !!fmt,
      email: _val('email'),
      ciudad: _val('shipping_city'),
      departamento: _selVal('shipping_state'),
      direccion: _val('shipping_address') || _val('address'),
      pais: 'CO',
      producto: '',
      precio: 0,
      cantidad: 1,
      sessionId: _st.sid,
      timestampInicio: _st.t0,
      timestampCaptura: new Date().toISOString(),
      paginaUrl: window.location.href,
      paginaTitulo: document.title || '',
      fuente: _param('utm_source'),
      medio: _param('utm_medium'),
      campana: _param('utm_campaign'),
      fbclid: _param('fbclid'),
      gclid: _param('gclid'),
      referrer: document.referrer || ''
    };

    // Producto: varias fuentes seguras
    try { if (window.funnel && window.funnel.product) {
      d.producto = window.funnel.product.name || '';
      d.precio = window.funnel.product.price || 0;
    }} catch(e) {}

    try { var ce = document.querySelector('[data-product-name]');
      if (ce) {
        if (!d.producto) d.producto = ce.getAttribute('data-product-name') || '';
        if (!d.precio) d.precio = parseFloat(ce.getAttribute('data-product-price')) || 0;
      }
    } catch(e) {}

    if (!d.producto) {
      try { var h = document.querySelector('h1');
        if (h) d.producto = h.textContent.trim().slice(0,100);
      } catch(e) {}
    }

    if (!d.precio) {
      try { var ps = document.querySelectorAll('[class*="price"], [class*="total"]');
        for (var i = 0; i < ps.length; i++) {
          var n = parseFloat((ps[i].textContent||'').replace(/[^\d.,]/g,'').replace(/\./g,'').replace(',','.'));
          if (n > 0) { d.precio = n; break; }
        }
      } catch(e) {}
    }

    return d;
  }

  // ========== ENVIAR WEBHOOK ==========
  function _enviar(url, datos, tipo, intento) {
    intento = intento || 1;
    var body = JSON.stringify({ tipo: tipo, datos: datos, intento: intento, timestamp: new Date().toISOString() });
    _log(tipo + ' enviando (intento ' + intento + ')...');

    // Abandonos: usar sendBeacon (funciona al cerrar página)
    if (tipo === 'carrito_abandonado' && navigator.sendBeacon) {
      try {
        if (navigator.sendBeacon(url, new Blob([body], {type:'application/json'}))) {
          _log(tipo + ' ✓ sendBeacon'); return;
        }
      } catch(e) {}
    }

    // XHR propio (NO modifica el global, crea instancia nueva)
    try {
      var x = new XMLHttpRequest();
      x.open('POST', url, true);
      x.setRequestHeader('Content-Type', 'application/json');
      x.onload = function() {
        if (x.status >= 200 && x.status < 300) { _log(tipo + ' ✓ (' + x.status + ')'); }
        else if (intento < MAX_REINTENTOS) {
          setTimeout(function(){ _enviar(url,datos,tipo,intento+1); }, 2000*intento);
        }
      };
      x.onerror = function() {
        if (intento < MAX_REINTENTOS) setTimeout(function(){ _enviar(url,datos,tipo,intento+1); }, 2000*intento);
      };
      x.send(body);
    } catch(e) { _log(tipo + ' ✗ ' + e.message); }
  }

  // ========== ORDEN COMPLETA ==========
  function _orden() {
    if (_st.ordenOk) return;
    var d = _datos();
    if (!d.telefonoValido || !d.nombre) { _log('ORDEN: faltan datos'); return; }
    _st.ordenOk = true;
    _st.abandonoOk = true;
    _log('ORDEN ✅');
    _enviar(WEBHOOK_URLS.ordenCompleta, d, 'orden_completa');
  }

  // ========== CARRITO ABANDONADO ==========
  function _abandono(razon) {
    if (_st.ordenOk || _st.abandonoOk) return;
    var d = _datos();
    if (!d.nombre || !d.telefonoValido) return;
    d.razonAbandono = razon;
    _st.abandonoOk = true;
    _log('ABANDONO ⚠️ ' + razon);
    _enviar(WEBHOOK_URLS.carritoAbandonado, d, 'carrito_abandonado');
  }

  // ========== DETECCIÓN DE ORDEN ==========
  // Listener pasivo en bubbling (NO capture) - no interfiere con nada
  document.addEventListener('click', function(e) {
    try {
      var t = e.target;
      if (!t) return;
      var btn = t.closest ? t.closest('a[href="#submit-step"]') : null;
      if (!btn) return;
      // Solo si teléfono válido
      if (!_fmtTel(_val('phone'))) return;
      // Esperar a que Funnelish procese
      setTimeout(function() { try { _orden(); } catch(x){} }, 2000);
    } catch(e) {}
  }, false);

  // ========== DETECCIÓN DE ABANDONO ==========
  window.addEventListener('beforeunload', function() {
    try { _abandono('cerro_pagina'); } catch(e) {}
  });

  document.addEventListener('visibilitychange', function() {
    try { if (document.visibilityState === 'hidden') _abandono('cambio_pestana'); } catch(e) {}
  });

  window.addEventListener('pagehide', function() {
    try { _abandono('pagehide'); } catch(e) {}
  });

  // Inactividad
  var _tInact = null;
  function _resetI() {
    if (_tInact) clearTimeout(_tInact);
    _tInact = setTimeout(function() {
      try { _abandono('inactividad_' + TIEMPO_ABANDONO_MIN + 'min'); } catch(e) {}
    }, TIEMPO_ABANDONO_MIN * 60000);
  }
  ['click','keydown','scroll','touchstart'].forEach(function(ev) {
    document.addEventListener(ev, _resetI, {passive:true});
  });
  _resetI();

  _log('Módulo v3 listo ✓ (sid: ' + _st.sid + ')');

  } catch(fatalErr) {
    console.error('[WH] Error fatal (checkout NO afectado):', fatalErr.message);
  }
})();
