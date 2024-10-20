
import logo from '../assets/favicon.png'
import add from '../assets/icons/plus.svg'
import search from '../assets/icons/search.svg'
import inbox from '../assets/icons/inbox.svg'
import today from '../assets/icons/date.svg'
import upcoming from '../assets/icons/upcoming.svg'
import menu from '../assets/icons/menu.svg'
import me from '../assets/me.png'


interface Props {
    isVisible: boolean,
    toggleSidebar: () => void
    addTask: () => void
}
const SideMenu = ({ isVisible, toggleSidebar, addTask }: Props) => {
    
  return (
    <>
    
    <div
      className={`flex h-screen flex-col justify-between bg-gray-100 border-e transition-all duration-300 ease-in-out ${
        isVisible ? 'w-72' : 'w-20'
      }`}
    >
      <div className="px-3 py-6">
      <div className="flex items-center justify-between px-3">
        {isVisible && (
          <span className="m-0 place-content-center rounded-lg text-xs text-gray-600">
            <img src={logo} alt="company logo" width={30} />
          </span>
        )}
        <span className="place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
          <img
            src={menu}
            onClick={toggleSidebar}
            alt="Toggle Menu"
            className={`cursor-pointer ${isVisible ? 'h-6 w-6' : 'h-6 w-6'}`} // Enlarge when collapsed
          />
        </span>
      </div>

        <ul className="mt-6 space-y-1">
          {/* Menu Items */}
          {[
            { label: 'Add Task', icon: add, action: addTask },
            { label: 'Search', icon: search },
            { label: 'Inbox', icon: inbox },
            { label: 'Today', icon: today },
            { label: 'Upcoming', icon: upcoming },
          ].map((item) => (
            <li key={item.label}>
              <a
                href="#"
                onClick={item.action ? item.action : undefined}
                className="flex items-center rounded-lg px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <span className="flex items-center justify-center h-8 w-8 mr-2">
                  <img src={item.icon} alt={item.label} className="h-6 w-6" />
                </span>
                {isVisible && <span>{item.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a href="#" className="flex items-center px-2  gap-2 bg-white p-4 hover:bg-gray-50">
          <img
            alt=""
            src={me}
            className="h-10 w-10 rounded-full object-cover"
          />
          <div>
          {isVisible && 
          <p className="text-xs  transition-all duration-300 ease-in-out">
            
          <strong className="block font-medium">Munashe Gandari</strong>

          <span>munashegandari34@gmail.com</span>
        </p>
          }
            
          </div>
        </a>
      </div>
    </div>
    
    </>  
  );
};

export default SideMenu;
