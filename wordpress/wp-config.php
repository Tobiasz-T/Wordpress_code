<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '/A-ma]S3Y1LXW|3%&EGl$ha|ZBQi!9c:Y07Ss#Jl|r^/Og;dBnLNQ;p>q4T35~2C' );
define( 'SECURE_AUTH_KEY',  '2//cg{rQ&eEdR6h_7H9|hLvJ^[zP>^OIXsFHlZCLS_%&RTVt^ sceS$?bqL4$Fr*' );
define( 'LOGGED_IN_KEY',    'U2bp==y`8leRiF`<7Gj3t#]$cW9R*tx|Sl~u| nremgygyM[8U2-&c$ |Wa-B?T_' );
define( 'NONCE_KEY',        'TYBuFyWD`D5m-*;Lw6WRc*d&>:kc$gx:$1O8hZn4Pv0B|4[Tc9Ly+E~.7]RzaOnY' );
define( 'AUTH_SALT',        'Bxsyn`niuuLTAj1vTAK(Z[g$:lfJNXj/nQ1F#f[Z%Dk`qC35A*M7CM?+ogD^x<n]' );
define( 'SECURE_AUTH_SALT', '$@?[=wl};B6Ly&xpG+ROD--,4RZ3TA R^q-w;YXd< ya9R1[r9qhh#Q!~{f8mzf8' );
define( 'LOGGED_IN_SALT',   'Gv- y7cXs|$pttB}guLYc[xa1wB <+LknNUc7u@3sg8*BF@H%{_Y>co=dY.==4 B' );
define( 'NONCE_SALT',       'FI=QEJf2YJpD/cIMH+XPT^&o<c|`n:G3wu+x]S&M~[<AySW Nw1{XKW|Ce $u<Kl' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
