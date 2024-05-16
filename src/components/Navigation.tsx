import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faAward, faCircleInfo, faGear, faMap, faShirt } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
	return <nav className="bottom-navigation">
		<NavLink to="/">
		<p className="icon"><Icon icon={faMap} /></p>
			<p className="icon-label">Spill</p>
		</NavLink>
		<NavLink to="/utmerkelser">
		<p className="icon"><Icon icon={faAward} /></p>
			<p className="icon-label">Utmerkelser</p>
		</NavLink>
		<NavLink to="/butikk">
		<p className="icon"><Icon icon={faShirt} /></p>
			<p className="icon-label">Butikk</p>
		</NavLink>
		<NavLink to="/hjelp">
			<p className="icon"><Icon icon={faCircleInfo} /></p>
			<p className="icon-label">Hjelp</p>
		</NavLink>
		<NavLink to="/innstillinger">
			<p className="icon"><Icon icon={faGear} /></p>
			<p className="icon-label">Innstillinger</p>
		</NavLink>
	</nav>
}

export default Navigation;