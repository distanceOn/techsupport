export const Chat = ({ id }: { id: string | undefined }) => {
  return (
    <div>
      <div>
        <button>вопрос решен?</button>
        <h4>Чат обращения {id}</h4>
      </div>

      <div>чатикчатиксообщения</div>

      <div>
        <input type="text" />
        <button>отправить</button>
      </div>
    </div>
  );
};
