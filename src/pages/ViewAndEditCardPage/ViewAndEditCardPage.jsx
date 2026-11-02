import PopBrowse from '../../components/popups/PopBrowse/PopBrowse';
import { SOverlay } from '../LogOutPage/LogOutPage.styled';
import { Outlet } from 'react-router-dom';

const ViewAndEditCardPage = () => {
  return (
    <SOverlay>
      <PopBrowse/>
      <Outlet />
    </SOverlay>
  )
}

export default ViewAndEditCardPage