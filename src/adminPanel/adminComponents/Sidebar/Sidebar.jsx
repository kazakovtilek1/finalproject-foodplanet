import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-title">FOOD PLANET</div>
            <ul>
                <li>Главная</li>
                <li>Заказы</li>
                <li>Меню</li>
                <li>Контакты</li>
                <li>Отзывы</li>
                <li>Сотрудники</li>
            </ul>
        </div>
    );
};

export default Sidebar;
