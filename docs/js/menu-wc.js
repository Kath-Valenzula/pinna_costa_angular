'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">pinna-costa documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminModule-797ddf46952540c7ebe8811707932df890e27fc3a20ac9dc2f7027ebdea9f09042cdaef8169bfc463b4afe7587a555be7c0df89d9eb30ae8f0673fe85b0c5384"' : 'data-bs-target="#xs-components-links-module-AdminModule-797ddf46952540c7ebe8811707932df890e27fc3a20ac9dc2f7027ebdea9f09042cdaef8169bfc463b4afe7587a555be7c0df89d9eb30ae8f0673fe85b0c5384"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-797ddf46952540c7ebe8811707932df890e27fc3a20ac9dc2f7027ebdea9f09042cdaef8169bfc463b4afe7587a555be7c0df89d9eb30ae8f0673fe85b0c5384"' :
                                            'id="xs-components-links-module-AdminModule-797ddf46952540c7ebe8811707932df890e27fc3a20ac9dc2f7027ebdea9f09042cdaef8169bfc463b4afe7587a555be7c0df89d9eb30ae8f0673fe85b0c5384"' }>
                                            <li class="link">
                                                <a href="components/AdminComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-852404bbc671208a8b466e874ea1c09bf5362cf38450c43685f9ac6130e7c29de76a3f3d04354be9322ac6566494803ce153a3a0e53b5ca2a302e77a8bd24b89"' : 'data-bs-target="#xs-components-links-module-AppModule-852404bbc671208a8b466e874ea1c09bf5362cf38450c43685f9ac6130e7c29de76a3f3d04354be9322ac6566494803ce153a3a0e53b5ca2a302e77a8bd24b89"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-852404bbc671208a8b466e874ea1c09bf5362cf38450c43685f9ac6130e7c29de76a3f3d04354be9322ac6566494803ce153a3a0e53b5ca2a302e77a8bd24b89"' :
                                            'id="xs-components-links-module-AppModule-852404bbc671208a8b466e874ea1c09bf5362cf38450c43685f9ac6130e7c29de76a3f3d04354be9322ac6566494803ce153a3a0e53b5ca2a302e77a8bd24b89"' }>
                                            <li class="link">
                                                <a href="components/AcercaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AcercaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaEncargosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaEncargosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListaProductosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListaProductosComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PerfilComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PerfilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductoDetalleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductoDetalleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecuperarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecuperarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CatalogoModule.html" data-type="entity-link" >CatalogoModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CatalogoModule-8e6d42cbc20eaf994b3b0758d26616725d4e0b49de94c494d6505de3b25ae88065a6b78ad6a005f23f8d8467be9cef0a652d004627470c0884bb45c3466fbc9c"' : 'data-bs-target="#xs-components-links-module-CatalogoModule-8e6d42cbc20eaf994b3b0758d26616725d4e0b49de94c494d6505de3b25ae88065a6b78ad6a005f23f8d8467be9cef0a652d004627470c0884bb45c3466fbc9c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CatalogoModule-8e6d42cbc20eaf994b3b0758d26616725d4e0b49de94c494d6505de3b25ae88065a6b78ad6a005f23f8d8467be9cef0a652d004627470c0884bb45c3466fbc9c"' :
                                            'id="xs-components-links-module-CatalogoModule-8e6d42cbc20eaf994b3b0758d26616725d4e0b49de94c494d6505de3b25ae88065a6b78ad6a005f23f8d8467be9cef0a652d004627470c0884bb45c3466fbc9c"' }>
                                            <li class="link">
                                                <a href="components/CatalogoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatalogoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EncargosModule.html" data-type="entity-link" >EncargosModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-EncargosModule-ea3a2cb17734708d6ce0637c8bd288b69d0071959ced52600822282b563a0c72be4d826a4462dd0d4be0840312096b5e09342211579d67754a9e01cfcd858ccc"' : 'data-bs-target="#xs-components-links-module-EncargosModule-ea3a2cb17734708d6ce0637c8bd288b69d0071959ced52600822282b563a0c72be4d826a4462dd0d4be0840312096b5e09342211579d67754a9e01cfcd858ccc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EncargosModule-ea3a2cb17734708d6ce0637c8bd288b69d0071959ced52600822282b563a0c72be4d826a4462dd0d4be0840312096b5e09342211579d67754a9e01cfcd858ccc"' :
                                            'id="xs-components-links-module-EncargosModule-ea3a2cb17734708d6ce0637c8bd288b69d0071959ced52600822282b563a0c72be4d826a4462dd0d4be0840312096b5e09342211579d67754a9e01cfcd858ccc"' }>
                                            <li class="link">
                                                <a href="components/EncargosComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EncargosComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LoginModule-0dc1dbf13303a74a27a4e4b8dcc9cf4a3c319730bb1b17fe7f5a2a3126774be38382732d5cc44e9b031a0f7136cc986d8996c8752a94d1608889b70b5e233631"' : 'data-bs-target="#xs-components-links-module-LoginModule-0dc1dbf13303a74a27a4e4b8dcc9cf4a3c319730bb1b17fe7f5a2a3126774be38382732d5cc44e9b031a0f7136cc986d8996c8752a94d1608889b70b5e233631"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-0dc1dbf13303a74a27a4e4b8dcc9cf4a3c319730bb1b17fe7f5a2a3126774be38382732d5cc44e9b031a0f7136cc986d8996c8752a94d1608889b70b5e233631"' :
                                            'id="xs-components-links-module-LoginModule-0dc1dbf13303a74a27a4e4b8dcc9cf4a3c319730bb1b17fe7f5a2a3126774be38382732d5cc44e9b031a0f7136cc986d8996c8752a94d1608889b70b5e233631"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegistroModule.html" data-type="entity-link" >RegistroModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RegistroModule-5652ec971512459532cb2f1df096b85bafd79e5963d44b7f4e61cc93510ff48b33fd72c1658e8127e6640d6709d0d526b21d092561f7f9a51db858b40685a445"' : 'data-bs-target="#xs-components-links-module-RegistroModule-5652ec971512459532cb2f1df096b85bafd79e5963d44b7f4e61cc93510ff48b33fd72c1658e8127e6640d6709d0d526b21d092561f7f9a51db858b40685a445"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegistroModule-5652ec971512459532cb2f1df096b85bafd79e5963d44b7f4e61cc93510ff48b33fd72c1658e8127e6640d6709d0d526b21d092561f7f9a51db858b40685a445"' :
                                            'id="xs-components-links-module-RegistroModule-5652ec971512459532cb2f1df096b85bafd79e5963d44b7f4e61cc93510ff48b33fd72c1658e8127e6640d6709d0d526b21d092561f7f9a51db858b40685a445"' }>
                                            <li class="link">
                                                <a href="components/RegistroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistroComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-bcaf9646e4e5f6eab654a1f810f2c788c10b9b80d77fd338bb4c88ffb509587cda069b2c644ba0f5d64f3182b66f77162bdf698aba458fa2b543f7c0641f395a"' : 'data-bs-target="#xs-components-links-module-SharedModule-bcaf9646e4e5f6eab654a1f810f2c788c10b9b80d77fd338bb4c88ffb509587cda069b2c644ba0f5d64f3182b66f77162bdf698aba458fa2b543f7c0641f395a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-bcaf9646e4e5f6eab654a1f810f2c788c10b9b80d77fd338bb4c88ffb509587cda069b2c644ba0f5d64f3182b66f77162bdf698aba458fa2b543f7c0641f395a"' :
                                            'id="xs-components-links-module-SharedModule-bcaf9646e4e5f6eab654a1f810f2c788c10b9b80d77fd338bb4c88ffb509587cda069b2c644ba0f5d64f3182b66f77162bdf698aba458fa2b543f7c0641f395a"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EncargosService.html" data-type="entity-link" >EncargosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JsonPlaceholderService.html" data-type="entity-link" >JsonPlaceholderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JsonService.html" data-type="entity-link" >JsonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Encargo.html" data-type="entity-link" >Encargo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserService.html" data-type="entity-link" >IUserService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Producto.html" data-type="entity-link" >Producto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Usuario.html" data-type="entity-link" >Usuario</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Usuario-1.html" data-type="entity-link" >Usuario</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Usuario-2.html" data-type="entity-link" >Usuario</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});