import styled from "styled-components";
import { WIDTH } from "../utils/utils";

export type ITable = {
  title?: string | React.ReactElement;
  description: string | number | React.ReactElement;
}[][];

export const Table = styled(
  (
    props: React.InputHTMLAttributes<HTMLDivElement> & {
      table: ITable;
      isZebra?: boolean;
    }
  ) => (
    <table className={props.className}>
      {props.table.map((row, i) => (
        <tr key={i} className={props.isZebra && (i + 1) % 2 ? "even" : ""}>
          {row.map((col, j) => (
            <td key={j}>
              <b>{col.title}</b>
              <p>{col.description}</p>
            </td>
          ))}
        </tr>
      ))}
    </table>
  )
)`
  display: flex;
  flex-direction: column;

  @media print {
    flex-direction: row;
    flex-wrap: wrap;
    display: table;
    tr {
      display: table-row;
      td {
        display: table-cell;
        height: auto;
      }
    }

    &.dashed {
      display: flex;
      tr {
        display: flex;
        border: 1px dashed #aaa;
      }
    }
  }

  tr {
    display: flex;
    flex-direction: row;
    @media (max-width: ${WIDTH}px) {
      flex-direction: column;
    }
    padding: 8px;
    &.even {
      background: #f8f8f8;
    }
    @media print {
      margin: 4px 4px;
    }

    td {
      width: 50%;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      @media (max-width: ${WIDTH}px) {
        width: 100%;
      }
      @media print {
        width: fit-content;
      }
    }
  }
`;
