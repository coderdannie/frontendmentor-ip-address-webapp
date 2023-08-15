import Dashboard from './Dashboard';
import Form from './Form';

const Header = ({ setSearchValue, data }) => {
  return (
    <div className="header">
      <div className="wrapper">
        <Form setSearchValue={setSearchValue} />
        <Dashboard data={data} />
      </div>
    </div>
  );
};
export default Header;
