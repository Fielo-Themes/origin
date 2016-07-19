(function() {
  'use strict';

  /**
   * @description Clase constructora de los filtros.
   * FieloFilter activa el funcionamiento de los filtros
   * Implementa los patrones de diseño definidos por MDL en
   * {@link https://github.com/jasonmayes/mdl-component-design-pattern}
   *
   * @version 2
   * @author Hugo Gómez Mac Gregor <hugo.gomez@fielo.com>
   * @contributor Diego Amarante <diego.amarante@fielo.com>
   * @param {HTMLElement} element - Elemento que será mejorado.
   * @constructor
   */
/*
  var FieloFilter = function FieloFilter(element) {
    this.element_ = element;
    // Initialize instance.
    this.init();
  };
  window.FieloFilter = FieloFilter;
  */
  /**
   * Guarda las constantes en un lugar para que sean facilmente actualizadas
   * @enum {string | number}
   * @private
   */
/*
  FieloFilter.prototype.Constant_ = {
    BINDING: 'data-binding',
    DATA_ID: 'data-id',
    CATEGORY: 'category',
    TAG: 'tag'
  };
*/
  /**
   * Guarda strings para nombres de clases definidas por este componente
   * que son usadas por JavaScript.
   * Esto nos permite cambiarlos solo en un lugar
   * @enum {string}
   * @private
   */
/*
  FieloFilter.prototype.CssClasses_ = {
    // Contenedor de los filtros
    LIST: 'fielo-list',

    // Filtro de categorias
    CATEGORY: 'fielo-filter--is-category',

    // Filtro de categorias
    TAG: 'fielo-filter--is-tag',

    // Items de filtros
    ITEM: 'fielo-list__item',
    LINK: 'fielo-link',

    // Item activo
    PAGINATOR: 'fielo-paginator',

    // Item activo
    ACTIVE: 'active'

  };

  // Private methods
*/
  /**
   * Setea los registros por defecto
   *
   * @private
   */
/*
  FieloFilter.prototype.setDefaults_ = function() {
    // Guardo la lista de items
    this.list_ = this.element_.querySelector('.' + this.CssClasses_.LIST);

    // Registro todos los items
    this.items_ =
      this.list_.querySelectorAll(
        '.' + this.CssClasses_.ITEM + ' ' +
        '.' + this.CssClasses_.LINK
      );

    // Registro el item activo
    this.itemActive_ = this.list_.querySelector(
      '.' + this.CssClasses_.ITEM + ' ' +
      '.' + this.CssClasses_.ACTIVE
    ) || false;

    // registro el data binding
    this.dataBinding_ = this.list_.getAttribute(this.Constant_.BINDING) || '""';

    // Seteo el filtro
    this.filters_ = {};

    // Setea el tipo de filtro
    this.setType_();

    // Registro los paginadores de este filtro
    this.bindWithPaginators_();

    // Seteo los items
    this.setupItems_();
  };
*/
  /**
   * Setea el tipo de filtro
   *
   * @private
   */
/*
  FieloFilter.prototype.bindWithPaginators_ = function() {
    // defino la variable
    this.listOfPaginators_ = document.querySelectorAll(
      '.' + this.CssClasses_.PAGINATOR +
      '[' + this.Constant_.BINDING + '=' + this.dataBinding_ + ']'
    );
  };
*/
  /**
   * Setea el tipo de filtro
   *
   * @private
   */
/*
  FieloFilter.prototype.setType_ = function() {
    // valor por default
    this.type_ = '';

    // Guardo que tipo de filtro es
    if (this.element_.classList.contains(this.CssClasses_.CATEGORY)) {
      this.type_ = this.Constant_.CATEGORY;
    } else if (this.element_.classList.contains(this.CssClasses_.TAG)) {
      this.type_ = this.Constant_.TAG;
    }
  };
*/
  /**
   * Limpia el item activo de sus propiedades
   *
   * @private
   */
/*
  FieloFilter.prototype.cleanActiveCss_ = function() {
    // si existe un item activo
    if (this.itemActive_) {
      // Limpo al activo viejo de todas sus clases
      this.itemActive_.classList.remove(this.CssClasses_.ACTIVE);

      // remueve el activo al padre ITEM
      fieloUtils.getParentUntil(
        this.itemActive_,
        '.' + this.CssClasses_.ITEM
      )
      .classList.remove(this.CssClasses_.ACTIVE);
    }
  };
*/
  /**
   * Verifico si el item ya esta activado
   *
   * @param {HTMLelement} item - Item a analizar
   * @private
   */
/*
  FieloFilter.prototype.checkIfItemIsAlreadyActive_ = function(item) {
    if (item.classList.contains(this.CssClasses_.ACTIVE)) {
      this.clickedOnSameItem_ = true;
    } else {
      this.clickedOnSameItem_ = false;
    }
  };
*/
  /**
   * Activa el item clickeado
   *
   * @param {HTMLelement} item - Item a activar
   * @private
   */
/*
  FieloFilter.prototype.activeItem_ = function(item) {
    this.checkIfItemIsAlreadyActive_(item);

    this.cleanActiveCss_();
    if (this.clickedOnSameItem_) {
      // limpio el filtro del actual
      this.removeFilter_();

      // Paso el itemActive a false porque ya no hay item activo
      this.itemActive = false;
    } else {
      // 2_ No tengo item activo
      // Agregar filtro
      this.addFilter_(item);
      // Activar actual
      this.itemActive_ = item;
      // Lo activo
      this.itemActive_.classList.add(this.CssClasses_.ACTIVE);
      // Activo el padre
      fieloUtils.getParentUntil(
        this.itemActive_,
        '.' + this.CssClasses_.ITEM
      )
      .classList.add(this.CssClasses_.ACTIVE);
    }
  };
*/
  /**
   * Limpia el filtro para ser mandado al paginador
   *
   * @param {HTMLelement} paginator - paginador asociado
   * @private
   */
/*
  FieloFilter.prototype.removeFilter_ = function() {
    if (this.type_ === this.Constant_.CATEGORY) {
      this.filters_.Category__c = null; // eslint-disable-line camelcase
    } else if (this.type_ === this.Constant_.TAG) {
      this.filters_.Tag__c = null; // eslint-disable-line camelcase
    }
  };
*/
  /**
   * Prepara el filtro para ser mandado al paginador
   *
   * @param {HTMLelement} item - Item a activar
   * @private
   */
/*
  FieloFilter.prototype.addFilter_ = function(item) {
    var dataId = item.getAttribute(this.Constant_.DATA_ID);
    // Obtengo el data id
    if (this.type_ === this.Constant_.CATEGORY) {
      this.filters_.Category__c = dataId; // eslint-disable-line camelcase
    } else if (this.type_ === this.Constant_.TAG) {
      this.filters_.Tag__c = dataId; // eslint-disable-line camelcase
    }
  };
*/
  /**
   * Inicializa cada item
   *@param {event} click - Evento de tipo click
   * @private
   */
/*
  FieloFilter.prototype.itemClickListener_ = function(click) {
    click.preventDefault();

    // activo el item clickeado
    this.activeItem_(click.target);

    // disparo los paginadores
    [].forEach.call(this.listOfPaginators_, function(paginator) {
      // Seteo el paginador
      paginator.FieloPaginator.setFilters(this.filters_);
      paginator.FieloPaginator.setPage();
      paginator.FieloPaginator.getRecords();
    }, this);
  };
*/
  /**
   * Inicializa cada item
   *
   * @private
   */
/*
  FieloFilter.prototype.setupItems_ = function() {
    [].forEach.call(this.items_, function(item) {
      item.addEventListener('click', this.itemClickListener_.bind(this));
    }, this);
  };

  // Public methods
*/
  /**
   * Inicializa el elemento
   */
  /*
  FieloFilter.prototype.init = function() {
    if (this.element_) {
      this.setDefaults_();
    }
  };
  // El componente se registra por si solo.
  // Asume que el componentHandler esta habilitado en el scope global
  componentHandler.register({
    constructor: FieloFilter,
    classAsString: 'FieloFilter',
    cssClass: 'fielo-filter'
  });
*/
})();
