
import './CotizarProducto.css';

function CotizarProducto() {
    return (
        
        
        <div className="container-centered">   
            <div className="card-centered">
            <h4 className='nombre'>Jorge Eduardo Ramos Dias 5O</h4>
                <h4 className="text-center">Cotizar producto</h4>
                <p className="text-center text-muted">Obtén tu cotización personalizada en segundos.</p>

                <form>
                    <div className="mb-3">
                        <h6 className="text-muted">Información de contacto</h6>
                        <div className="row">
                            <div className="col">
                                <label className="form-label">Nombre</label>
                                <input type="text" className="form-control" placeholder="Nombre" />
                            </div>
                            <div className="col">
                                <label className="form-label">Correo</label>
                                <input type="email" className="form-control" placeholder="Correo" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <h6 className="text-muted">Información adicional</h6>
                        <div className="row">
                            <div className="col">
                                <label className="form-label">Cantidad de productos</label>
                                <input type="number" className="form-control" placeholder="Cantidad" />
                            </div>
                            <div className="col">
                                <label className="form-label">Tipo de entrega</label>
                                <select className="form-select">
                                    <option>Seleccionar</option>
                                    <option>Envío estándar</option>
                                    <option>Envío express</option>
                                    <option>Recogida en tienda</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-check mb-3">
                        <input type="checkbox" className="form-check-input" id="terms" />
                        <label className="form-check-label" htmlFor="terms">
                            Acepto los términos y condiciones
                        </label>
                    </div>

                    <button type="submit" className="btn btn-success w-50">Enviar cotización</button>
                </form>
            </div>
        </div>
    );
}

export default CotizarProducto;
