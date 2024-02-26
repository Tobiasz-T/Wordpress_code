<?php

// BEGIN iThemes Security - Do not modify or remove this line
// iThemes Security Config Details: 2
define( 'DISALLOW_FILE_EDIT', true ); // Disable File Editor - Security > Settings > WordPress Tweaks > File Editor
// END iThemes Security - Do not modify or remove this line

define( 'ITSEC_ENCRYPTION_KEY', 'UGErYlZGQEx2V2dkP1JOZjcgJUxGOEJRJntDKUo2VEtIMEhPcXlXeTVFRCZvJWh1OkFEX1pDQHJwWEptQWN6Rw==' );

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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
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
define( 'DB_HOST', 'localhost:3309' );

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
define( 'AUTH_KEY',         '{WS X42?0F%tE4IRd1>ASN_kry/$(V|Wb.~V]Ap=G&}>drf3r/L2Tr%:*d Rjkic' );
define( 'SECURE_AUTH_KEY',  'UpwCb,BU:tj#~oP4eXc{A^.::vjU59*P6qJ?W*x.*SmL?CD7MkE;[+LGlzpM0;~Q' );
define( 'LOGGED_IN_KEY',    '2hOP@^WoV[afpJHo~[E0Y,||K?O`JUH,by<8isvN3D>|P3bC<=!16=jNo?z/fvw=' );
define( 'NONCE_KEY',        'kI|~abR9c[6<+^t0Xlcfw9Yz|%b;H`itKh~~VT0]ljx65|6ub_`WY4&w=:f&~$XF' );
define( 'AUTH_SALT',        '~%E,~nmU/.X#<.}xjNSO2]ebN]ZuNhm<],D%<)X?5t}(^F$#[-zkVN1:QIVOUUVC' );
define( 'SECURE_AUTH_SALT', 'T2|:+9[,LGf1y*2kGMutT*v>hl&D_Rvo*qJO3/{lqFx+I&Qc,?mhykUpX{dLKXX;' );
define( 'LOGGED_IN_SALT',   'i.Ju.(p(8o D8#:[6Kl>gI@7:q*ON)>EmV+k8`Ry*^-x?dNHN=pd@fCdHDHP.q[u' );
define( 'NONCE_SALT',       'K(,K,baNWj_.PILjYK:!#jai1yoH]`jP2mO6FhQ&ag[jlyvgxhHAYYa.?b^4:v,]' );

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
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
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
