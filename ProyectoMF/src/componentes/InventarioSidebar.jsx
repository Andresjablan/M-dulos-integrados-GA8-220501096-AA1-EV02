
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './css/InventarioSidebar.module.css';

const InventarioSidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    // Aquí podrías manejar lógica extra si necesitas
    console.log(`Navegando a: ${section}`);
  };

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>Inventario</h2>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a className={styles.menuButton}>
              <img src="imagenes/entrada.png" className={styles.menuIcon} alt="Entradas" />
              <span>Entradas</span>
            </a>
            <ul className={styles.submenu}>
              <li><a onClick={() => handleNavigation('nueva-entrada')} className={styles.submenuOption}>Nueva Entrada</a></li>
              <li><a onClick={() => handleNavigation('consultar-entrada')} className={styles.submenuOption}>Consultar Entrada</a></li>
            </ul>
          </li>

          <li className={styles.navItem}>
            <a className={styles.menuButton}>
              <img src="imagenes/salidam.png" className={styles.menuIcon} alt="Salidas" />
              <span>Salidas</span>
            </a>
            <ul className={styles.submenu}>
              <li><a onClick={() => handleNavigation('nueva-salida')} className={styles.submenuOption}>Nueva Salida</a></li>
              <li><a onClick={() => handleNavigation('consultar-salida')} className={styles.submenuOption}>Consultar Salida</a></li>
            </ul>
          </li>

          <li className={styles.navItem}>
            <a className={styles.menuButton}>
              <img src="imagenes/articulo.png" className={styles.menuIcon} alt="Artículos" />
              <span>Artículos</span>
            </a>
            <ul className={styles.submenu}>
              <li className={styles.navItem}>
                <a onClick={() => navigate('/gestion-articulos')} className={styles.menuButton}>
               <img src="imagenes/articulo.png" className={styles.menuIcon} alt="Gestión Artículos" />
              <span>Gestión Artículos</span>
               </a>
              </li>
            </ul>
          </li>

          <li className={styles.navItem}>
            <a className={styles.menuButton}>
              <img src="imagenes/vendedor1.png" className={styles.menuIcon} alt="Proveedores" />
              <span>Proveedores</span>
            </a>
            <ul className={styles.submenu}>
              <li><a onClick={() => handleNavigation('nuevo-proveedor')} className={styles.submenuOption}>Nuevo Proveedor</a></li>
              <li><a onClick={() => handleNavigation('consultar-proveedor')} className={styles.submenuOption}>Consultar Proveedor</a></li>
            </ul>
          </li>

          <li className={styles.navItem}>
            <a onClick={() => handleNavigation('reportes')} className={styles.menuButton}>
              <img src="imagenes/reporte.png" className={styles.menuIcon} alt="Reportes" />
              <span>Reportes</span>
            </a>
          </li>

          <li className={styles.navItem}>
            <a onClick={() => navigate('/menu')} className={styles.menuButton}>
              <img src="imagenes/salida.png" className={styles.menuIcon} alt="Salir" />
              <span>Salir</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default InventarioSidebar;

