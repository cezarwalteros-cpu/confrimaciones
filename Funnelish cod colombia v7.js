<script>
(function(){
    
    // ==========================================
    // BASE DE DATOS CIUDADES Y DEPARTAMENTOS
    // ==========================================
    
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
    
    // ==========================================
    // FUNCIONES
    // ==========================================
    
    function generarEmail() {
        return 'cliente' + Math.random().toString().slice(2,10) + Date.now().toString().slice(-4) + '@codcolombia.co';
    }
    
    function formatearTelefono(tel) {
        var nums = tel.replace(/\D/g, '');
        if (nums.startsWith('57') && nums.length > 10) nums = nums.substring(2);
        if (nums.length > 10) nums = nums.slice(-10);
        return '+57' + nums;
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
        
        select.innerHTML = '<option value="">Departamento</option>';
        departamentosColombia.forEach(function(d) {
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
                select.dispatchEvent(new Event('change', {bubbles: true}));
                console.log('✅ Departamento:', depto);
                break;
            }
        }
    }
    
    function crearAutocompletado(input) {
        var box = document.createElement('div');
        box.id = 'sugerencias-ciudad';
        box.style.cssText = 'position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #ccc;border-radius:0 0 8px 8px;max-height:200px;overflow-y:auto;z-index:99999;display:none;box-shadow:0 4px 12px rgba(0,0,0,0.15);';
        
        input.parentElement.style.position = 'relative';
        input.parentElement.appendChild(box);
        
        input.addEventListener('input', function() {
            var txt = this.value.toLowerCase().trim();
            box.innerHTML = '';
            
            if (txt.length < 1) { box.style.display = 'none'; return; }
            
            var res = listaCiudades.filter(function(c) { return c.toLowerCase().indexOf(txt) > -1; }).slice(0, 8);
            
            if (res.length === 0) { box.style.display = 'none'; return; }
            
            res.forEach(function(ciudad) {
                var item = document.createElement('div');
                item.innerHTML = '<strong>' + ciudad + '</strong> <span style="color:#888;font-size:12px;">- ' + ciudadesColombia[ciudad] + '</span>';
                item.style.cssText = 'padding:10px 12px;cursor:pointer;border-bottom:1px solid #eee;';
                item.onmouseenter = function() { this.style.background = '#f0f7ff'; };
                item.onmouseleave = function() { this.style.background = '#fff'; };
                item.onclick = function() {
                    input.value = ciudad;
                    box.style.display = 'none';
                    seleccionarDepartamento(ciudad);
                };
                box.appendChild(item);
            });
            
            box.style.display = 'block';
        });
        
        input.addEventListener('blur', function() {
            setTimeout(function() {
                box.style.display = 'none';
                if (input.value.trim()) seleccionarDepartamento(input.value.trim());
            }, 200);
        });
        
        document.addEventListener('click', function(e) {
            if (e.target !== input) box.style.display = 'none';
        });
    }
    
    // ==========================================
    // INICIALIZACIÓN
    // ==========================================
    
    function init() {
        console.log('🚀 COD Colombia v7...');
        
        // Email
        var email = document.querySelector('input[name="email"]');
        if (email) email.value = generarEmail();
        ocultarCampo('email');
        
        // País
        var pais = document.querySelector('select[name="shipping_country"]');
        if (pais) {
            for (var i = 0; i < pais.options.length; i++) {
                if (pais.options[i].value === 'CO') {
                    pais.selectedIndex = i;
                    pais.dispatchEvent(new Event('change', {bubbles: true}));
                    break;
                }
            }
        }
        ocultarCampo('shipping_country');
        
        // Departamento
        inyectarDepartamentos();
        ocultarCampo('shipping_state');
        
        // Ciudad
        var ciudad = document.querySelector('input[name="shipping_city"]');
        if (ciudad) {
            ciudad.placeholder = 'Escribe tu ciudad...';
            ciudad.setAttribute('autocomplete', 'off');
            crearAutocompletado(ciudad);
        }
        
        // Teléfono
        var tel = document.querySelector('input[name="phone"]');
        if (tel) {
            tel.addEventListener('blur', function() {
                if (this.value.trim()) this.value = formatearTelefono(this.value);
            });
        }
        
        console.log('✅ COD Colombia listo!');
    }
    
    // Ejecutar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() { setTimeout(init, 500); });
    } else {
        setTimeout(init, 500);
    }
    
    // Validar antes de enviar
    document.addEventListener('submit', function() {
        var tel = document.querySelector('input[name="phone"]');
        var email = document.querySelector('input[name="email"]');
        var ciudad = document.querySelector('input[name="shipping_city"]');
        
        if (tel && tel.value) tel.value = formatearTelefono(tel.value);
        if (email && !email.value) email.value = generarEmail();
        if (ciudad && ciudad.value) seleccionarDepartamento(ciudad.value.trim());
    }, true);
    
})();
</script>
