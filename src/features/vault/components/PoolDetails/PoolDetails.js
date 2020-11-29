import React, { useState } from 'react';
import AccordionDetails from '@material-ui/core/AccordionActions';
import FormControl from '@material-ui/core/FormControl';
import { useTranslation } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import BigNumber from 'bignumber.js';
import { useSnackbar } from 'notistack';
import { makeStyles } from '@material-ui/core/styles';

import CustomOutlinedInput from 'components/CustomOutlinedInput/CustomOutlinedInput';
import Button from 'components/CustomButtons/Button.js';
import CustomSlider from 'components/CustomSlider/CustomSlider';
import RefundButtons from './RefundButtons/RefundButtons';
import { useFetchApproval, useFetchDeposit, useFetchWithdraw } from '../../redux/hooks';
import { useConnectWallet } from '../../../home/redux/hooks';
import { inputLimitPass, inputFinalVal } from 'features/helpers/utils';
import { byDecimals, calculateReallyNum, format } from 'features/helpers/bignumber';
import styles from './styles';

const useStyles = makeStyles(styles);

const PoolDetails = ({ pool, balanceSingle, index, singleDepositedBalance }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { web3, address } = useConnectWallet();
  const { enqueueSnackbar } = useSnackbar();
  const { fetchApproval, fetchApprovalPending } = useFetchApproval();
  const { fetchDeposit, fetchDepositPending } = useFetchDeposit();
  const { fetchWithdraw, fetchWithdrawPending } = useFetchWithdraw();
  const [depositedBalance, setDepositedBalance] = useState({});
  const [withdrawAmount, setWithdrawAmount] = useState({});

  const handleDepositedBalance = (index, total, _, sliderNum) => {
    setDepositedBalance({
      [index]: sliderNum === 0 ? 0 : calculateReallyNum(total, sliderNum),
      [`slider-${index}`]: sliderNum === 0 ? 0 : sliderNum,
    });
  };

  const handleWithdrawAmount = (total, sliderNum) => {
    setWithdrawAmount({
      [index]: sliderNum === 0 ? 0 : calculateReallyNum(total, sliderNum),
      [`slider-${index}`]: sliderNum === 0 ? 0 : sliderNum,
    });
  };

  const changeDetailInputValue = (type, total, tokenDecimals, event) => {
    let value = event.target.value;
    if (!inputLimitPass(value, tokenDecimals)) {
      return;
    }

    let sliderNum = 0;
    let inputVal = 0;
    if (value) {
      inputVal = Number(value.replace(',', ''));
      sliderNum = byDecimals(inputVal / total, 0).toFormat(2) * 100;
    }

    switch (type) {
      case 'depositedBalance':
        setDepositedBalance({
          [index]: inputFinalVal(value, total, tokenDecimals),
          [`slider-${index}`]: sliderNum,
        });
        break;
      case 'withdrawAmount':
        setWithdrawAmount({
          [index]: inputFinalVal(value, total, tokenDecimals),
          [`slider-${index}`]: sliderNum,
        });
        break;
      default:
        break;
    }
  };

  const onApproval = () => {
    fetchApproval({
      address,
      web3,
      tokenAddress: pool.tokenAddress,
      contractAddress: pool.earnContractAddress,
      index,
    })
      .then(() => enqueueSnackbar(`Approval success`, { variant: 'success' }))
      .catch(error => enqueueSnackbar(`Approval error: ${error}`, { variant: 'error' }));
  };

  const onDeposit = isAll => {
    if (pool.depositsPaused) {
      console.error('Deposits paused!');
      return;
    }

    if (isAll) {
      setDepositedBalance({
        [index]: format(balanceSingle),
        [`slider-${index}`]: 100,
      });
    }

    let amountValue = depositedBalance[index]
      ? depositedBalance[index].replace(',', '')
      : depositedBalance[index];

    fetchDeposit({
      address,
      web3,
      isAll,
      amount: new BigNumber(amountValue)
        .multipliedBy(new BigNumber(10).exponentiatedBy(pool.tokenDecimals))
        .toString(10),
      contractAddress: pool.earnContractAddress,
      index,
    })
      .then(() => enqueueSnackbar(`Deposit success`, { variant: 'success' }))
      .catch(error => enqueueSnackbar(`Deposit error: ${error}`, { variant: 'error' }));
  };

  const onWithdraw = (pool, index, isAll, singleDepositedBalance) => {
    if (isAll) {
      setWithdrawAmount({
        [index]: format(singleDepositedBalance),
        [`slider-${index}`]: 100,
      });
    }

    let amountValue = withdrawAmount[index]
      ? withdrawAmount[index].replace(',', '')
      : withdrawAmount[index];

    fetchWithdraw({
      address,
      web3,
      isAll,
      amount: new BigNumber(amountValue)
        .multipliedBy(new BigNumber(10).exponentiatedBy(pool.tokenDecimals))
        .toString(10),
      contractAddress: pool.earnContractAddress,
      index,
    })
      .then(() => enqueueSnackbar(`Withdraw success`, { variant: 'success' }))
      .catch(error => enqueueSnackbar(`Withdraw error: ${error}`, { variant: 'error' }));
  };

  return (
    <AccordionDetails style={{ justifyContent: 'space-between' }}>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.sliderDetailContainer}>
          <div className={classes.showDetailLeft}>
            {t('Vault-Balance')}:{balanceSingle.toFormat(4)} {pool.token}
          </div>
          <FormControl fullWidth variant="outlined" className={classes.numericInput}>
            <CustomOutlinedInput
              value={depositedBalance[index] !== undefined ? depositedBalance[index] : '0'}
              onChange={e =>
                changeDetailInputValue('depositedBalance', balanceSingle.toNumber(), e)
              }
            />
          </FormControl>
          <CustomSlider
            aria-labelledby="continuous-slider"
            value={depositedBalance['slider-' + index] ? depositedBalance['slider-' + index] : 0}
            onChange={handleDepositedBalance.bind(this, index, balanceSingle.toNumber())}
          />
          <div>
            {pool.allowance === 0 ? (
              <div className={classes.showDetailButtonCon}>
                <Button
                  className={`${classes.showDetailButton} ${classes.showDetailButtonContained}`}
                  onClick={onApproval}
                  disabled={pool.depositsPaused || fetchApprovalPending[index]}
                >
                  {fetchApprovalPending[index]
                    ? `${t('Vault-Approving')}`
                    : `${t('Vault-ApproveButton')}`}
                </Button>
              </div>
            ) : (
              <div className={classes.showDetailButtonCon}>
                <Button
                  className={`${classes.showDetailButton} ${classes.showDetailButtonOutlined}`}
                  color="primary"
                  disabled={
                    pool.depositsPaused ||
                    !Boolean(depositedBalance[index]) ||
                    fetchDepositPending[index] ||
                    new BigNumber(depositedBalance[index]).toNumber() > balanceSingle.toNumber()
                  }
                  onClick={() => onDeposit(false)}
                >
                  {t('Vault-DepositButton')}
                </Button>
                {Boolean(pool.tokenAddress) && (
                  <Button
                    className={`${classes.showDetailButton} ${classes.showDetailButtonContained}`}
                    disabled={
                      pool.depositsPaused ||
                      fetchDepositPending[index] ||
                      new BigNumber(depositedBalance[index]).toNumber() > balanceSingle.toNumber()
                    }
                    onClick={() => onDeposit(true)}
                  >
                    {t('Vault-DepositButtonAll')}
                  </Button>
                )}
              </div>
            )}
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.sliderDetailContainer}>
          <div className={classes.showDetailLeft}>
            Deposited:{' '}
            {format(singleDepositedBalance.multipliedBy(new BigNumber(pool.pricePerFullShare)))}{' '}
            {pool.token}
          </div>
          <FormControl fullWidth variant="outlined">
            <CustomOutlinedInput
              value={withdrawAmount[index] !== undefined ? withdrawAmount[index] : '0'}
              onChange={e =>
                changeDetailInputValue(
                  'withdrawAmount',
                  format(
                    singleDepositedBalance.multipliedBy(new BigNumber(pool.pricePerFullShare))
                  ),
                  e
                )
              }
            />
          </FormControl>
          <CustomSlider
            aria-labelledby="continuous-slider"
            value={withdrawAmount['slider-' + index] ? withdrawAmount['slider-' + index] : 0}
            onChange={() =>
              handleWithdrawAmount(
                format(singleDepositedBalance.multipliedBy(new BigNumber(pool.pricePerFullShare)))
              )
            }
          />
          <div className={classes.showDetailButtonCon}>
            {pool.status === 'refund' ? (
              <RefundButtons
                tokenAddress={pool.earnedTokenAddress}
                contractAddress={pool.refundContractAddress}
                index={index}
              />
            ) : (
              <>
                <Button
                  className={`${classes.showDetailButton} ${classes.showDetailButtonOutlined}`}
                  type="button"
                  color="primary"
                  onClick={onWithdraw.bind(this, pool, index, false, singleDepositedBalance)}
                >
                  {fetchWithdrawPending[index]
                    ? `${t('Vault-Withdrawing')}`
                    : `${t('Vault-WithdrawButton')}`}
                </Button>
                <Button
                  className={`${classes.showDetailButton} ${classes.showDetailButtonOutlined}`}
                  type="button"
                  color="primary"
                  onClick={onWithdraw.bind(this, pool, index, true, singleDepositedBalance)}
                >
                  {fetchWithdrawPending[index]
                    ? `${t('Vault-Withdrawing')}`
                    : `${t('Vault-WithdrawButtonAll')}`}
                </Button>
              </>
            )}
          </div>
        </Grid>
      </Grid>
    </AccordionDetails>
  );
};

export default PoolDetails;
