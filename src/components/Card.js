import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Tag from './tag'

const Card = ({ className , node}) => (
    <div className={ className } key={node.id}>
        <Link to={node.frontmatter.slug}>
            <div className="tags">
                {node.frontmatter.categories.map((cat) => (
                    <Tag>{cat}</Tag>
                    
                ))}
            </div>
            <div class="row">
                <h2>{node.frontmatter.title}</h2>
                <svg width="30" height="38" viewBox="0 0 30 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M12.7567 33.0348L14.2433 34.6824C14.8728 35.3801 15.8906 35.3801 16.5134 34.6824L29.5312 20.2617C30.1607 19.5641 30.1607 18.4359 29.5312 17.7457L16.5134 3.31757C15.8839 2.61991 14.8661 2.61991 14.2433 3.31757L12.7567 4.96523C12.1205 5.6703 12.1339 6.82069 12.7835 7.51093L20.8527 16.0312H1.60714C0.716518 16.0312 0 16.8254 0 17.8125V20.1875C0 21.1746 0.716518 21.9687 1.60714 21.9687H20.8527L12.7835 30.4891C12.1272 31.1793 12.1138 32.3297 12.7567 33.0348Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="30" height="38" fill="white" transform="matrix(1 0 0 -1 0 38)"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
            
        </Link>
    </div>
)

const StyledCard = styled(Card)`
  height: 200px;
  margin-bottom: 40px;
  .tags{
      text-align: right;
      margin-bottom: 35px;
      height: 40px;
  }
  h2{
      color: black;
      text-align: right;
  }
  svg{
      width: 30px;
      margin-top: 20px;
      float: right;
  }

  @media screen and (max-width: 1000px){
      height: auto;
      .tags{
          height: 26px;
          margin-bottom: 20px;
      }
      svg{
          width: 18px;
          margin-top: 0
      }
      h2{
          margin-right: 20px;
      }
      .row{
          display: flex;
          justify-content: space-between;
      }
  }
`

export default StyledCard