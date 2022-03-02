const style = {
  textGeneral: `font-medium`,
  textActive: `font-bold`,
}

export const SideBarOption = ({ text, Icon, setSelected, setActive }) => {
  return (
    <div
      className="flex w-min cursor-pointer items-center 
    rounded-[100px]  p-4
    transition-all hover:bg-[#333c45] hover:duration-200 hover:ease-in-out"
      onClick={() => setSelected(text)}
    >
      <div className="mr-4 text-xl">
        <Icon />
      </div>

      <div className={`${setActive ? style.textActive : style.textGeneral}`}>
        {text}
      </div>
    </div>
  )
}
