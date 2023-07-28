import React from 'react';
import { Typography, Divider } from 'antd';
import ResponsiveAppBar from '../Navbar/Nav';
const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div>
        {/* <ResponsiveAppBar /> */}
        <br/>
        <br/>
        <br/>
      <Title level={2} style={{display:"flex",justifyContent:"center"}}>About Us</Title>
      <Divider variant="inset" component="h2" />

      

      <Title level={3}>Our Goals</Title>
      <Paragraph style={{fontSize:"20px"}}>
        <ol>
          <li>
            Empowering Communities: We aim to empower individuals by providing them with a platform to report crimes and incidents they witness or experience. By encouraging community engagement, we believe in creating a network of vigilant citizens who actively participate in keeping their neighborhoods safe.
          </li>
          <li>
            Promoting Transparency: We strive to promote transparency in the reporting process. We ensure that all information shared through our platform is handled securely and is made available to the relevant authorities. By maintaining open lines of communication, we contribute to the accountability and effectiveness of law enforcement agencies.
          </li>
          <li>
            Fostering Collaboration: Collaboration is crucial in addressing crime effectively. We encourage collaboration between citizens, law enforcement agencies, and other community organizations. By working together, we can pool our resources, knowledge, and efforts to prevent and solve crimes more efficiently.
          </li>
          <li>
            Raising Awareness: We believe in the power of education and awareness in preventing crimes. Our platform serves as a hub for sharing safety tips, crime prevention strategies, and information about ongoing initiatives. By raising awareness, we empower individuals to take proactive measures and make informed decisions to protect themselves and their communities.
          </li>
        </ol>
      </Paragraph>

      <Title level={3}>How It Works</Title>
      <Paragraph style={{fontSize:"20px"}}>
        <ol>
          <li>
            Report Crime: Our user-friendly reporting system allows individuals to easily report crimes and incidents they have witnessed or experienced. The information provided is kept confidential and is shared only with authorized personnel.
          </li>
          <li>
            Anonymous Reporting: We understand that some individuals may prefer to remain anonymous when reporting crimes. We provide an option to submit anonymous reports, ensuring that their identity is protected.
          </li>
          <li>
            Community Engagement: We encourage active community participation through our forums and discussion boards. Users can share information, provide tips, and discuss ways to address local crime-related issues. Together, we can create a united front against crime.
          </li>
          <li>
            Resources and Support: Our platform offers a range of resources, including safety guidelines, legal information, and support services. We aim to equip individuals with the necessary knowledge and tools to stay safe and informed.
          </li>
        </ol>
      </Paragraph>

      <Paragraph>
        Join us in making a difference and building safer communities!
        <br />
        If you have any questions or feedback, please don't hesitate to contact us. We appreciate your support in our mission to combat crime and create a better future for all.
      </Paragraph>
    </div>
  );
};

export default About;
