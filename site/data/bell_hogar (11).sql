-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 09-08-2020 a las 06:35:22
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bell_hogar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(45) DEFAULT NULL,
  `subcategory` varchar(45) DEFAULT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `technical_specifications` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `image1` varchar(45) DEFAULT NULL,
  `image2` varchar(45) DEFAULT NULL,
  `image3` varchar(45) DEFAULT NULL,
  `image4` varchar(45) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `enabled` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `name`, `category`, `subcategory`, `brand`, `description`, `technical_specifications`, `color`, `price`, `image1`, `image2`, `image3`, `image4`, `stock`, `enabled`) VALUES
(1, 'CALEFACTOR LILIANA LEÑOS C/FORZADOR 700/1400', 'CALEFACCION', 'CALEFACTORES ELECTRICOS', 'LILIANA', 'CALEFACTOR LILIANA LEÑOS C/FORZADOR 700/1400 W CH218AR', NULL, NULL, 15.999, 'CI080-CALORE-Lateral_web-548x548.jpg', 'CI080-CALORE-Frente_web-548x548.jpg', 'CI080-CALORE-Girada_web-548x548.jpg', 'silla-1-2.jpg', 15, 1),
(2, 'CALEFACTOR LILIANA INFRARROJO \"CALORE\" CCI08', 'CALEFACCION', 'CALEFACTORES ELECTRICOS', 'LILIANA', 'CALEFACTOR LILIANA INFRARROJO \"CALORE\" CCI080', NULL, NULL, 2.643, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 15, 1),
(3, 'CALOVENTOR LILIANA \"DUAL HOT\" \"CCCFH510\"  ', 'CALEFACCION  ', 'CALEFACTORES ELECTRICOS  ', 'LILIANA  ', 'CALOVENTOR LILIANA \"DUAL HOT\" \"CCCFH510\"  ', NULL, NULL, 2.652, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 1, 1),
(4, 'CALEFACTOR LILIANA INFRARROJO OSCILANTE \"INFR', 'CALEFACCION   ', 'CALEFACTORES ELECTRICOS   ', 'LILIANA   ', 'CALEFACTOR LILIANA INFRARROJO OSCILANTE \"INFRASOL\"\" 700/1400 W NEGRO CCIG100\"   ', NULL, NULL, 3.145, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 2, 1),
(5, 'TURBOCALEFACTOR LILIANA \"HOTDECO\"\" PIE/PARED ', 'CALEFACCION', 'CALEFACTORES ELECTRICOS', 'LILIANA', 'TURBOCALEFACTOR LILIANA \"HOTDECO\"\" PIE/PARED CCPPV500\"', NULL, NULL, 6.611, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 1, 1),
(6, 'TECNOTURBO LILIANA TECNOHOT CTCV100', 'CALEFACCION', 'CALEFACTORES ELECTRICOS', 'LILIANA', 'TECNOTURBO LILIANA TECNOHOT CTCV100', NULL, NULL, 3.223, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 1, 1),
(7, 'TURBOCALEFACTOR LILIANA CCTC20  ', 'CALEFACCION  ', 'CALEFACTORES ELECTRICOS  ', 'LILIANA  ', 'TURBOCALEFACTOR LILIANA CCTC20  ', NULL, NULL, 2.199, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 6, 1),
(8, 'PANEL RADIANTE LILIANA INFRARROJO VULCANO 120', 'CALEFACCION      ', 'CALEFACTORES ELECTRICOS      ', 'LILIANA      ', 'PANEL RADIANTE LILIANA INFRARROJO VULCANO 1200/2400 W CCCI640      ', NULL, NULL, 4.389, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 9, 1),
(9, 'CALOVENTOR LILIANA \"MINISOL\"\" 1000/2000 W CCC', 'CALEFACCION ', 'CALEFACTORES ELECTRICOS ', 'LILIANA ', 'CALOVENTOR LILIANA \"MINISOL\"\" 1000/2000 W CCCFH400\" ', NULL, NULL, 1.579, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 1, 1),
(10, 'TURBOCALEFACTOR LILIANA \"CONFORTDECO\"\" PIE/PA', 'CALEFACCION', 'CALEFACTORES ELECTRICOS', 'LILIANA', 'TURBOCALEFACTOR LILIANA \"CONFORTDECO\"\" PIE/PARED CCPPV400\"', NULL, NULL, 5.371, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 2, 1),
(11, 'TURBOFORZADOR LILIANA TORRE \"TROPIC\"\" CCFTP53', 'CALEFACCION', 'CALEFACTORES ELECTRICOS', 'LILIANA', 'TURBOFORZADOR LILIANA TORRE \"TROPIC\"\" CCFTP530\"', NULL, NULL, 3.801, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 2, 1),
(12, 'PROCESADORA LILIANA MANUAL \"TWISTMIX\"\" AAH910', 'ELECTRODOMESTICOS ', 'PROCESADORAS ', 'LILIANA ', 'PROCESADORA LILIANA MANUAL \"TWISTMIX\"\" AAH910/911\" ', NULL, NULL, 3.145, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 5, 1),
(13, 'LUSTRASPIRADORA LILIANA CON PAÑOS LL340 ', 'ELECTRODOMESTICOS ', 'ASPIRADORAS ', 'LILIANA ', 'LUSTRASPIRADORA LILIANA CON PAÑOS LL340 ', NULL, NULL, 7.438, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 2, 1),
(14, 'LICUADORA LILIANA \"DELUXLIX\"\" AL180\"', 'ELECTRODOMESTICOS', 'LICUADORAS', 'LILIANA', 'LICUADORA LILIANA \"DELUXLIX\"\" AL180\"', NULL, NULL, 4.628, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 1, 1),
(15, 'PAVA ELECTRICA LILIANA \"TEMPOMATE\"\"/\"\"MATEAND', 'ELECTRODOMESTICOS', 'PAVAS ELECTRICAS', 'LILIANA', 'PAVA ELECTRICA LILIANA \"TEMPOMATE\"\"/\"\"MATEANDO\"\" AP975\"', NULL, NULL, 3.016, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 9, 1),
(16, 'BATIDORA LILIANA PLANETARIA \"POWERMIX\"\" AB910', 'ELECTRODOMESTICOS', 'BATIDORAS', 'LILIANA', 'BATIDORA LILIANA PLANETARIA \"POWERMIX\"\" AB910\"', NULL, NULL, 14.049, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 1, 1),
(17, 'HORNO DE PAN LILIANA \"FULL BREAD\"\" 45 L AFP91', 'ELECTRODOMESTICOS', 'HORNOS PARA PAN', 'LILIANA', 'HORNO DE PAN LILIANA \"FULL BREAD\"\" 45 L AFP910\"', NULL, NULL, 6.198, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 2, 1),
(19, 'VENTILADOR DE PIE LILIANA 20\" PARR MET/ASPAS ', 'FRIO/CALOR', 'VENTILADORES', 'LILIANA', 'VENTILADOR DE PIE LILIANA 20\" PARR MET/ASPAS METALICAS VPM2016\"', NULL, NULL, 3.966, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 1, 1),
(20, 'VENTILADOR DE TECHO LILIANA VTB100', 'FRIO/CALOR', 'VENTILADORES', 'LILIANA', 'VENTILADOR DE TECHO LILIANA VTB100', NULL, NULL, 3.801, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 3, 1),
(21, 'VENTILADOR DE TECHO LILIANA C/4 TULIPAS VTHM4', 'FRIO/CALOR', 'VENTILADORES', 'LILIANA', 'VENTILADOR DE TECHO LILIANA C/4 TULIPAS VTHM410', NULL, NULL, 9.008, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 4, 1),
(22, 'VENTILADOR INDUSTRIAL LILIANA 32\" VPI32\"', 'FRIO/CALOR', 'VENTILADORES', 'LILIANA', 'VENTILADOR INDUSTRIAL LILIANA 32\" VPI32\"', NULL, NULL, 6.942, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 8, 1),
(23, 'VENTILADOR DE PIE LILIANA 20\" CROMADO VVPC20B', 'FRIO/CALOR', 'VENTILADORES', 'LILIANA', 'VENTILADOR DE PIE LILIANA 20\" CROMADO VVPC20B\"', NULL, NULL, 4.297, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 1, 1),
(24, 'AIRE ACONDICIONADO TCL MIRACLE 5100 W F/C TAC', 'FRIO/CALOR', 'AIRES ACONDICIONADOS', 'LILIANA', 'AIRE ACONDICIONADO TCL MIRACLE 5100 W F/C TACA-5100FCSA/MI2-SK', NULL, NULL, 36.776, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 4, 1),
(25, 'VENTILADOR DE PIE LILIANA 20\" CROMADO VVPRC20', 'FRIO/CALOR', 'VENTILADORES', 'LILIANA', 'VENTILADOR DE PIE LILIANA 20\" CROMADO VVPRC20\"', NULL, NULL, 553, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 1, 1),
(26, 'VENTILADOR DE PIE LILIANA 18\" ORBITAL CROMADO', 'FRIO/CALOR', 'VENTILADORES', 'LILIANA', 'VENTILADOR DE PIE LILIANA 18\" ORBITAL CROMADO VVPRC18\"', NULL, NULL, 619, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 1, 1),
(27, 'VENTILADOR DE PARED LILIANA 30\" VVID30\"', 'FRIO/CALOR', 'VENTILADORES', 'LILIANA', 'VENTILADOR DE PARED LILIANA 30\" VVID30\"', NULL, NULL, 6.776, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 2, 1),
(28, 'TURBOVENTILADOR LILIANA 18\" ORBITAL CROMADO V', 'FRIO/CALOR', 'VENTILADORES', 'LILIANA', 'TURBOVENTILADOR LILIANA 18\" ORBITAL CROMADO VVTRC18/VVOTRC18\"', NULL, NULL, 3.305, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 1, 1),
(29, 'VENTILADOR DE MESA LILIANA 16\" ORBITAL VSOC16', 'FRIO/CALOR', 'VENTILADORES', 'LILIANA', 'VENTILADOR DE MESA LILIANA 16\" ORBITAL VSOC16\"', NULL, NULL, 2.975, 'silla-1-1.jpg', 'silla-1-3.jpg', 'sofa banner.jpg', 'silla-1-3.jpg', 3, 1),
(62, 'SOFA FUNCIONAL', 'SOFA', 'ESQUINERO', 'BELL HOGAR', 'Sofá confortable, versatil y funcional que se adapta a tus necesidades. Tapizado en Lino Gris ó Lino Beige. MEDIDAS: SOFA 2,25x0,90mt', NULL, NULL, 80, 'sillón 12.jpg', 'sillón _12.jpg', 'sillón _12_.jpg', NULL, 3, 1),
(63, 'SOFA ESTILO INDUSTRIAL', 'SOFA', 'INDUSTRIAL', 'Sillones', 'Realizado en madera maciza, tela y el color es a elección.', NULL, NULL, 70000, 'sillón 13.jpg', 'sillón 13_.jpg', 'sillón_13.jpg', NULL, 3, 1),
(64, 'SOFA INDIVIDUAL AMPLIO', 'SOFA', 'INDIVIDUAL', 'Bell Hogar', 'Medidas: 1,30 x 0,90 x 0,95 alto aprox.   Tapizado bull crudo o tusor!', NULL, NULL, 50000, 'sofa5.jpg', 'sillón _3.jpg', 'sillón_13.jpg', NULL, 2, 1),
(70, 'SOFA INDIVIDUAL', 'SOFA', 'INDIVIDUAL', 'BELL HOGAR', 'Asientos de placa supersof y respaldos de vellón siliconado, los que otorgan confort y durabilidad.', NULL, NULL, 50000, 'sillón 11.jpg', 'sillón 11_.jpg', 'sillón _11.jpg', NULL, 4, 1),
(71, 'SILLON FLORES', 'Sillones', 'Sillones', 'BELL HOGAR', 'Asientos de placa supersof y respaldos de vellón siliconado', NULL, NULL, 40000, 'Sillón _ 18.jpg', 'Sillón _ 18_.jpg', 'Sillón _ _18.jpg', NULL, 3, 1),
(72, 'SILLON ROSA', 'Sillones', 'Sillones', 'BELL HOGAR', 'Estructura de madera maciza. Tapizado en lino o pana de primera calidad. Amplia variedad de colores para elegir.', NULL, NULL, 35000, 'Sillón _ _17.jpg', 'Sillón _ 17_.jpg', 'Sillón _ _17.jpg', NULL, 2, 1),
(73, 'SILLON DIVAN', 'Sillones', 'Sillones', 'BELL HOGAR', 'Asientos de placa supersof y respaldos de vellón siliconado, los que otorgan confort y durabilidad.', NULL, NULL, 35000, 'Silló _ 16.jpg', 'sillón _ _16.jpg', 'Sillón _ 16_.jpg', NULL, 1, 1),
(74, 'SOFA CONFORT', 'SOFA', 'Sofa', 'BELL HOGAR', 'Asientos de placa supersof y respaldos de vellón siliconado, los que otorgan confort y durabilidad.', NULL, NULL, 60000, 'sofa4.jpg', 'Sillón _ _17.jpg', 'sillón_13.jpg', NULL, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` char(20) NOT NULL,
  `last_name` char(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `dni_cuit` double DEFAULT NULL,
  `is_admin` tinyint(1) NOT NULL,
  `image` varchar(45) DEFAULT NULL,
  `phone` double DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `address_id` int(11) DEFAULT NULL,
  `payment_id` int(11) DEFAULT NULL,
  `adress` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `dni_cuit`, `is_admin`, `image`, `phone`, `created_at`, `updated_at`, `password`, `address_id`, `payment_id`, `adress`) VALUES
(1, 'Administrador', 'Bell Hogar', 'admin@bellhogar.com', 12345678, 1, 'random_profile.jpg', 44444444, '2020-07-06 01:01:01', '2020-07-06 01:01:01', '$2b$10$5Fguf1R2XZTCJL7Qk7/AeuouEw7o3jbTk6BHOoo71sXwdXvHjCf7e', NULL, NULL, NULL),
(2, 'Emiliana', 'Vargas', 'emiliana@gmail.com', NULL, 0, 'random_profile.jpg', 99999999, NULL, NULL, '$2b$10$djprOAo.LxwuX0zG1PTCL.QxyXPDydTN7HLgdnnXVcuJGdI21HAlO', NULL, NULL, NULL),
(3, 'Juan', 'Garcia', 'juanGarcia@gmail.com', 33333333, 0, 'random_profile.jpg', 33333333, NULL, NULL, '$2b$10$K731/tDXVyq4cG1enM.ZleTecsN.pOVvd3ZNvLYfkK0P5Zhaywrpa', NULL, NULL, NULL),
(17, 'Emiliana Giselle', 'Vargas Verdejo', 'emilianavargasverdejo@gmail.com', 123123456, 0, 'Emiliana Giselle - 325555552020-.jpg', 261155555555, NULL, NULL, '$2b$10$nN6SlGBGT6RGi5W2VYf0Fuwf6jt02ZLCvBjsYglSnLTRPQGa2BHuK', NULL, NULL, NULL),
(29, 'Pedro', 'Ortiz', 'pedroortiz@gmail.com', 32123124, 0, 'Pedro - 321231232020-.jpg', 155123123, NULL, NULL, '$2b$10$96N0GlZqRqnQn/guEFOVtul0N4g6YFkHSPJa15REb3nmy20/t4Y3W', NULL, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD KEY `fk_payments_idx` (`payment_id`),
  ADD KEY `fk_users_2_idx` (`address_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_2` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_users_3` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
