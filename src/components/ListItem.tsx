import User from '@homework-task/types/user.type';

const ListItem: React.FC<User> = ({ id, name, username, email, phone }) => {
    return (
        <div
            className="flex flex-col gap-4 p-4 bg-cream py-6 px-4 rounded-2xl"
            key={`list-user-${id}`}
        >
            <p className="text-base leading-relaxed">
                <span className="text-black font-medium mr-2">Name:</span>
                <span className="text-gray80 text-base">{name}</span>
            </p>
            <p className="text-base leading-relaxed">
                <span className="text-black font-medium mr-2">Username:</span>
                <span className="text-gray80 text-base">{username}</span>
            </p>
            <p className="text-base leading-relaxed">
                <span className="text-black font-medium mr-2">Email:</span>
                <span className="text-gray80 text-base">{email}</span>
            </p>
            <p className="text-base leading-relaxed">
                <span className="text-black font-medium mr-2">Phone:</span>
                <span className="text-gray80 text-base">{phone}</span>
            </p>
        </div>
    );
};

export default ListItem;
