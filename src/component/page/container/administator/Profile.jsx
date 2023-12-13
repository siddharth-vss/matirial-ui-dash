import  { useEffect } from 'react'
import Header from '../../../Header'
// import { Prompt } from './profile/index'
import { Buttons, Tabs, Table } from './profilecom'
import { useSelector } from 'react-redux'
const Profile = () => {
  const Data = useSelector((state) => state.Data)
  useEffect(() => {
    // console.log(Data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Header page={'Manage Profile'} section={'ADMINISTRATOR'} />
      <Buttons />
      <Tabs />
      <Table Data={Data} />
    </>
  )
}

export default Profile