import Link from 'next/link';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBHamburgerToggler
} from 'mdbreact';
import { motion } from 'framer-motion'
import React from 'react'
import  styles  from '../styles/NavBar.module.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }
  
  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  }

  render() {
    return (
      <div className={styles.navbar}>
        <MDBNavbar color='indigo' dark expand='md'>
        <motion.div whileHover= {{ scale: 1.5 }} >
          <MDBNavbarBrand>
            <a 
              href="/"><img 
              src="https://obcg.org/Images/WebPFiles/obcglogo-p-500.webp" 
              alt="logo" 
              width={75} 
              height={75}
              z-index="100" />
            </a>
          </MDBNavbarBrand>
          </motion.div>
          
          <MDBHamburgerToggler color="white" id="hamburger1" className={styles.hamburger} onClick={()=> this.toggleSingleCollapse('collapse1')} /> 
            
          <MDBCollapse isOpen={this.state.collapse1} navbar>
          <MDBNavbarNav left>
              
            </MDBNavbarNav>
            <MDBNavbarNav right>
            <motion.div whileHover= {{ scale: 1.15 }} >
            <MDBNavItem>
                <Link href='/'>
                  <a className='nav-link' 
                    onClick={()=> this.toggleSingleCollapse('collapse1')}
                    >Home</a>
                </Link>
              </MDBNavItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.15 }} >
              <MDBNavItem>
                <Link href='/about'>
                  <a className='nav-link' onClick={()=> this.toggleSingleCollapse('collapse1')} >About</a>
                </Link>
              </MDBNavItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.15 }} >
              <MDBNavItem>
                <Link href='/articles'>
                <a className='nav-link' onClick={()=> this.toggleSingleCollapse('collapse1')} >Articles of Incorporation</a>
                </Link>
              </MDBNavItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.15 }} >
              <MDBNavItem>
                <Link href='/executive'>
                  <a className='nav-link' onClick={()=> this.toggleSingleCollapse('collapse1')} >Executive Board</a>
                </Link>
              </MDBNavItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.15 }} >
              <MDBNavItem>
                <Link href='/register'>
                  <a className='nav-link' onClick={()=> this.toggleSingleCollapse('collapse1')} >Check Usage</a>
                </Link>
              </MDBNavItem>
              </motion.div>
              
              <MDBNavItem>
                <MDBDropdown>
                
                  <MDBDropdownToggle nav caret>
                  <motion.div whileHover={{ scale: 1.15 }} >
                    <span className='mr-2'>Documents</span>
                    </motion.div>
                  </MDBDropdownToggle>
                 
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                    <Link target='blank' href='/Efficiency.pdf'>
                        <a onClick={()=> this.toggleSingleCollapse('collapse1')}>Water Use Efficiency</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <Link target='_blank' href='/FAQ.pdf'>
                        <a onClick={()=> this.toggleSingleCollapse('collapse1')}>Misc.</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/Bylaws.pdf'>
                        <a onClick={()=> this.toggleSingleCollapse('collapse1')}>Current Bylaws</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/Sysplan.pdf'>
                        <a onClick={()=> this.toggleSingleCollapse('collapse1')}>Water System Plan</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/consumer.pdf'>
                        <a onClick={()=> this.toggleSingleCollapse('collapse1')}>Consumer Confidence 2020</a>
                      </Link>
                    </MDBDropdownItem>                     
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                  <motion.div whileHover={{ scale: 1.15 }} >
                    <span className='mr-2'>Minutes</span>
                  </motion.div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link target='blank' href='/minutes061221.pdf'>
                        <a onClick={()=> this.toggleSingleCollapse('collapse1')}>2021</a>
                      </Link>
                    </MDBDropdownItem> 
                    <MDBDropdownItem>
                    <Link target='blank' href='/2020Minutes.pdf'>
                        <a onClick={()=> this.toggleSingleCollapse('collapse1')}>2020</a>
                      </Link>
                    </MDBDropdownItem> 
                    <MDBDropdownItem>
                    <Link target='_blank' href='/2019Minutes.pdf'>
                        <a onClick={()=> this.toggleSingleCollapse('collapse1')}>2019</a>
                      </Link>
                    </MDBDropdownItem>                   
                    <MDBDropdownItem>
                    <Link target='_blank' href='/2018Minutes.pdf'>
                        <a onClick={()=> this.toggleSingleCollapse('collapse1')}>2018</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/2017Minutes.pdf'>
                        <a onClick={()=> this.toggleSingleCollapse('collapse1')}>2017</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/2016Minutes.pdf'>
                        <a onClick={()=> this.toggleSingleCollapse('collapse1')}>2016</a>
                      </Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                    <Link target='_blank' href='/2015Minutes.pdf'>
                        <a onClick={()=> this.toggleSingleCollapse('collapse1')}>2015</a>
                      </Link>
                    </MDBDropdownItem>                    
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <motion.div whileHover={{ scale: 1.15 }} >
              <MDBNavItem>
                <Link href='/contact'>
                  <a className='nav-link' onClick={()=> this.toggleSingleCollapse('collapse1')} >Contact</a>
                </Link>
              </MDBNavItem>
              </motion.div>
              <motion.div whileHover={{ scale: 1.15 }} >
              <MDBNavItem>
                <Link href='/login'>
                  <a className='nav-link' onClick={()=> this.toggleSingleCollapse('collapse1')} >Login</a>
                </Link>
              </MDBNavItem>
              </motion.div>
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}

export default NavBar;
